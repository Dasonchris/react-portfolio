import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import Education from "./Pages/Education/Edutaion";
import Experience from "./Pages/Experience/Experience";
import Project from "./Pages/Projects/Project";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
