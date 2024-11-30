import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState(null);

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
    setNewTodo("");
    fetchTodos();
  };

  const updateTodo = async (todoId) => {
    const token = localStorage.getItem("token");
    await axios.put(
      `http://localhost:5000/todos/${todoId}`,
      { task: editTodo },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setEditTodo(null);
    fetchTodos();
  };

  const deleteTodo = async (todoId) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5000/todos/${todoId}`, {
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
            {editTodo === todo._id ? (
              <input
                type="text"
                defaultValue={todo.task}
                onChange={(e) => setEditTodo(e.target.value)}
              />
            ) : (
              todo.task
            )}
            <button onClick={() => (editTodo ? updateTodo(todo._id) : setEditTodo(todo._id))}>
              {editTodo === todo._id ? "Save" : "Edit"}
            </button>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
