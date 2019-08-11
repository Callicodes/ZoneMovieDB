import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <div className="App-sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="App-content-wrapper">
          <h1 className="App-main-title">Main Title</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
