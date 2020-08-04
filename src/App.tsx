import React from "react";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>
        <span className="text-success">Bulls</span> &{" "}
        <span className="text-danger">Bears</span>
      </h1>
      <Home />
    </div>
  );
}

export default App;
