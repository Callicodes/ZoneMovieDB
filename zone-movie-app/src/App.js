import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Filter from "./components/Filters/Filter";
import Main from "./components/Main/Main";
import Discover from "./components/Discover/Discover";
// import { PATH_POPULAR } from "./api/api";
import { PATH_POPULAR, PATH_TOP_RATED, PATH_GENRE } from "./api/api";
import { BrowserRouter, Route } from "react-router-dom";
import SearchResults from "./components/SearchResults/SearchResults";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filtersOpen: true
    };
  }

  toggleFilters = () => {
    this.setState({ filtersOpen: !this.state.filtersOpen });
  };

  updateFilters = value => {
    this.setState({
      filters: {
        rating: {
          min: value.min,
          max: value.max
        }
      }
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="App-main">
            <div className="App-sidebar-wrapper">
              <Sidebar />
              <Filter
                filtersOpen={this.state.filtersOpen}
                filters={this.state.filters}
                updateFilters={this.updateFilters}
              />
            </div>
            <div className="App-content-wrapper">
              {/* <Main title="Popular" /> */}
              <Route
                exact
                path="/"
                render={() => (
                  <Discover
                    title="Discover"
                    toggleFilters={this.toggleFilters}
                  />
                )}
              />
              <Route
                exact
                path="/popular"
                render={() => <Main title="Popular" section={PATH_POPULAR} />}
              />
              <Route
                exact
                path="/top-rated"
                render={() => (
                  <Main title="Top Rated" section={PATH_TOP_RATED} />
                )}
              />
              <Route
                exact
                path="/genre/movie/list"
                render={() => <Main title="Genre" section={PATH_GENRE} />}
              />
              {/* <h1 className="App-main-title">Main Title</h1> */}
              <Route
                path="/search?query=:searchTerm"
                component={SearchResults}
              />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
