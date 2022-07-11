import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "@/pages/home";
import Task from "@/pages/task";
import "./styles/reset.css";

import "./mock";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/task" element={<Task />}></Route>
      </Routes>
    </div>
  );
}

export default App;
