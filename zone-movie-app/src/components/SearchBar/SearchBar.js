import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      result: null
    };
  }

  getSearchMovies = searchTerm => {
    fetch(
      `${PATH_BASE}${PATH_SEARCH}${PATH_MOVIE}?api_key=${API_KEY}&query=${searchTerm}`
    )
      .then(response => response.json())
      .then(result =>
        this.setState({
          result
        })
      );
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.getSearchMovies(searchTerm);
  };

  handleSearchChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    const { searchTerm } = this.state;

    // Do something with `searchTerm`
    console.log(searchTerm);
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div className="SearchBar-wrapper">
        <form onSubmit={this.handleSearchSubmit}>
          <input
            className="search-movie-input"
            type="text"
            placeholder="Search movies..."
            onChange={this.handleSearchChange}
            value={searchTerm}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
