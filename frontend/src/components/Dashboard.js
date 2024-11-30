import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodos = async () => {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:5000/todos", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTodos(res.data);
  };

  const addTodo = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:5000/todos",
      { task: newTodo },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <input type="text" placeholder="Add a new task" onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
