import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { PATH_POPULAR } from "./api/api";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <div className="App-sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="App-content-wrapper">
          {/* <Main title="Popular" /> */}
          <Main title="Popular" section={PATH_POPULAR} />
          {/* <h1 className="App-main-title">Main Title</h1> */}
        </div>
      </div>
    </div>
  );
}

export default App;
