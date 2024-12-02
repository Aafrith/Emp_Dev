import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");

  const fetchTodos = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://127.0.0.1:5000/todos", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTodos(res.data);
  };

  const addTodo = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      "http://127.0.0.1:5000/todos",
      { task: newTodo },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setNewTodo("");
    fetchTodos();
  };

  const updateTodo = async (id) => {
    const token = localStorage.getItem("token");
    await axios.put(
      `http://127.0.0.1:5000/todos/${id}`,
      { task: editTodo },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setEditTodo("");
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://127.0.0.1:5000/todos/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTodos();
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
