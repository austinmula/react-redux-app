import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
