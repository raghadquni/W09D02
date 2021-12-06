import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Tasks from "./components/Tasks";
import Login from "./components/Login";
import Home from "./components/Home";


function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Register" element={<Register />} />
      <Route exact path="/Tasks" element={<Tasks />} />
      <Route exact path="/Login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
