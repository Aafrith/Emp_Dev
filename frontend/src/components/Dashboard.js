import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const fetchTodos = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must log in first");
      navigate("/"); // Use navigate to redirect to login
      return;
    }

    try {
      const res = await axios.get("http://127.0.0.1:5000/todos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTodos(res.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Failed to fetch todos. Please try again.");
      navigate("/"); // Redirect to login
    }
  };

  const addTodo = async () => {
    const token = localStorage.getItem("token");
    if (!newTodo.trim()) {
      alert("Task cannot be empty");
      return;
    }

    try {
      await axios.post(
        "http://127.0.0.1:5000/todos",
        { task: newTodo },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNewTodo(""); // Clear input field
      fetchTodos(); // Refresh todos
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Failed to add task");
    }
  };

  const updateTodo = async (id) => {
    const token = localStorage.getItem("token");
    if (!editTodo.trim()) {
      alert("Task cannot be empty");
      return;
    }

    try {
      await axios.put(
        `http://127.0.0.1:5000/todos/${id}`,
        { task: editTodo },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditTodo(""); // Clear input field
      fetchTodos(); // Refresh todos
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Failed to update task");
    }
  };

  const deleteTodo = async (id) => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`http://127.0.0.1:5000/todos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTodos(); // Refresh todos
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Failed to delete task");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.task}
            <input
              type="text"
              placeholder="Edit task"
              onChange={(e) => setEditTodo(e.target.value)}
            />
            <button onClick={() => updateTodo(todo._id)}>Update</button>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
