import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
from pymongo import MongoClient
import bcrypt

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")  # Fetch the JWT secret from .env
CORS(app)

jwt = JWTManager(app)

# MongoDB connection using the URI from .env
client = MongoClient(os.getenv("MONGO_URI"))
db = client["users"]

# User Signup
@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({"error": "Username, email, and password are required"}), 400

    if db.users.find_one({"email": email}):
        return jsonify({"error": "User with this email already exists"}), 400

    if db.users.find_one({"username": username}):
        return jsonify({"error": "Username already taken"}), 400

    hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
    db.users.insert_one({
        "username": username,
        "email": email,
        "password": hashed_password.decode("utf-8")
    })
    return jsonify({"message": "User registered successfully"}), 201

# User Login
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    user = db.users.find_one({"email": email})
    if user and bcrypt.checkpw(password.encode("utf-8"), user["password"].encode("utf-8")):
        token = create_access_token(identity={"id": str(user["_id"]), "username": user["username"], "email": email})
        return jsonify({"token": token, "username": user["username"]}), 200

    return jsonify({"error": "Invalid email or password"}), 401

# Protected Dashboard Route
@app.route("/dashboard", methods=["GET"])
@jwt_required()
def dashboard():
    current_user = get_jwt_identity()
    return jsonify({
        "message": f"Welcome to the dashboard, {current_user['username']}!",
        "username": current_user["username"]
    }), 200

# Health Check
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Backend is running"}), 200

if __name__ == "__main__":
    app.run(debug=True)
