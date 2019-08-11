import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
// import { PATH_POPULAR } from "./api/api";
import { PATH_POPULAR, PATH_TOP_RATED, PATH_GENRE } from "./api/api";
import { BrowserRouter, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="App-main">
          <div className="App-sidebar-wrapper">
            <Sidebar />
          </div>
          <div className="App-content-wrapper">
            {/* <Main title="Popular" /> */}
            <Route
              exact
              path="/"
              render={() => <Main title="Popular" section={PATH_POPULAR} />}
            />
            <Route
              exact
              path="/top-rated"
              render={() => <Main title="Top Rated" section={PATH_TOP_RATED} />}
            />
            <Route
              exact
              path="/genre/movie/list"
              render={() => <Main title="Genre" section={PATH_GENRE} />}
            />
            {/* <h1 className="App-main-title">Main Title</h1> */}
            <Route path="/search?query=:searchTerm" component={SearchResults} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
