import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ToDoApp from "./screens/ToDoApp";
import DragAndDropPage from "./screens/DragAndDropPage";

function App() {
  return (
    <Router>
      <div style={styles.nav}>
        <Link to="/" style={styles.link}>
          ToDo List
        </Link>
        <Link to="/drag-and-drop" style={styles.link}>
          Drag and Drop
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<ToDoApp />} />
        <Route path="/drag-and-drop" element={<DragAndDropPage />} />
      </Routes>
    </Router>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
  },
};

export default App;
