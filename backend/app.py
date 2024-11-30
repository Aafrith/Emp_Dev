from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId
import bcrypt

# Initialize Flask app
app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "821520295831227f78a2785817a04cc4fd8b70063c6ebe9312e631b68d894544"  # Replace with a secure key
CORS(app, supports_credentials=True)
jwt = JWTManager(app)

# MongoDB connection
client = MongoClient("mongodb+srv://emp:emp@emp.c5s66.mongodb.net/emp?retryWrites=true&w=majority")  # Update with your MongoDB Atlas credentials
db = client["to_do_app"]

# User Signup
@app.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    # Check if user already exists
    if db.users.find_one({"email": email}):
        return jsonify({"error": "User already exists"}), 400

    # Hash the password
    hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
    db.users.insert_one({"email": email, "password": hashed_password.decode("utf-8")})
    return jsonify({"message": "User registered successfully"}), 201

# User Login
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    # Find user in the database
    user = db.users.find_one({"email": email})
    if user:
        # Check password
        if bcrypt.checkpw(password.encode("utf-8"), user["password"].encode("utf-8")):
            token = create_access_token(identity={"id": str(user["_id"]), "email": user["email"]})
            return jsonify({"token": token}), 200

    return jsonify({"error": "Invalid email or password"}), 401

# Health Check for Backend
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Backend is running"}), 200

if __name__ == "__main__":
    app.run(debug=True)
