import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./screens/Login";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Login />
    </div>
  );
}

export default App;
