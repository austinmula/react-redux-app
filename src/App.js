import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
