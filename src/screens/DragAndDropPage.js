import React, { useState } from "react";

const DragAndDropPage = () => {
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
      <h1 style={styles.header}>ToDo List - Drag and Drop</h1>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task..."
        />
        <button style={styles.button} onClick={addTask}>
          Add Task
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
    margin: "50px auto",
    padding: "20px",
    maxWidth: "500px",
    textAlign: "center",
    backgroundColor: "#f0f8ff",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    color: "#333",
    fontSize: "2em",
    marginBottom: "20px",
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
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginRight: "10px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#218838",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
  },
  taskText: {
    cursor: "pointer",
    fontSize: "18px",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "5px 10px",
    transition: "background-color 0.3s ease",
  },
};

export default DragAndDropPage;
