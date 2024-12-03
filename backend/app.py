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

# Add a to-do item
@app.route("/todos", methods=["POST"])
@jwt_required()
def add_todo():
    current_user = get_jwt_identity()
    data = request.get_json()
    task = data.get("task")

    if not task:
        return jsonify({"error": "Task is required"}), 400

    todo = {"task": task, "user_id": current_user["id"]}
    db.todos.insert_one(todo)
    return jsonify({"message": "Task added successfully"}), 201

# Get all to-dos for the logged-in user
@app.route("/todos", methods=["GET"])
@jwt_required()
def get_todos():
    current_user = get_jwt_identity()
    print("Current User:", current_user)  # Debugging log

    if not current_user:
        return jsonify({"error": "Invalid token"}), 401

    todos = db.todos.find({"user_id": current_user["id"]})
    todos_list = [{"_id": str(todo["_id"]), "task": todo["task"]} for todo in todos]
    print("Fetched Todos:", todos_list)  # Debugging log

    return jsonify(todos_list), 200


# Update a to-do item
@app.route("/todos/<todo_id>", methods=["PUT"])
@jwt_required()
def update_todo(todo_id):
    current_user = get_jwt_identity()
    data = request.get_json()
    task = data.get("task")

    if not task:
        return jsonify({"error": "Task is required"}), 400

    result = db.todos.update_one(
        {"_id": ObjectId(todo_id), "user_id": current_user["id"]},
        {"$set": {"task": task}}
    )

    if result.modified_count == 0:
        return jsonify({"error": "Task not found or not updated"}), 404

    return jsonify({"message": "Task updated successfully"}), 200

# Delete a to-do item
@app.route("/todos/<todo_id>", methods=["DELETE"])
@jwt_required()
def delete_todo(todo_id):
    current_user = get_jwt_identity()
    result = db.todos.delete_one({"_id": ObjectId(todo_id), "user_id": current_user["id"]})

    if result.deleted_count == 0:
        return jsonify({"error": "Task not found"}), 404

    return jsonify({"message": "Task deleted successfully"}), 200

# Health Check for Backend
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Backend is running"}), 200


if __name__ == "__main__":
    app.run(debug=True)
