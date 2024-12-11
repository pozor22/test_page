import React, { useState } from "react";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>ToDo List</h1>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button style={styles.button} onClick={addTask}>
          Add
        </button>
      </div>
      <ul style={styles.list}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              ...styles.listItem,
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <span
              onClick={() => toggleTaskCompletion(task.id)}
              style={styles.taskText}
            >
              {task.text}
            </span>
            <button
              style={styles.deleteButton}
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    margin: "0 auto",
    maxWidth: "400px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  input: {
    width: "70%",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 15px",
    marginLeft: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  taskText: {
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "5px 10px",
  },
};

export default ToDoApp;
