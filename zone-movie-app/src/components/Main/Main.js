import React, { Component } from "react";
import {
  API_KEY,
  PATH_BASE,
  PATH_MOVIE,
  DEFAULT_PAGE,
  PATH_PAGE
} from "../../api/api";
import "./Main.css";
import List from "../../components/List/List";
import Button from "../../components/Button/Button";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {}
    };
  }

  componentDidMount = () => {
    this.getMovies(this.props.section, DEFAULT_PAGE);
  };

  getMovies = (section, page) => {
    fetch(
      `${PATH_BASE}${PATH_MOVIE}${section}?language=en-US&api_key=${API_KEY}&${PATH_PAGE}${page}`
    );
    fetch(
      `${PATH_BASE}${PATH_MOVIE}${section}?language=en-US&api_key=${API_KEY}`
    )
      .then(response => response.json())
      .then(movies => this.setMovies(movies));
  };

  setMovies = movies => {
    const { results, page } = movies;

    const oldResults = page !== 1 ? this.state.movies.results : [];

    const updatedResults = [...oldResults, ...results];

    this.setState({
      movies: { results: updatedResults, page }
    });
  };

  render() {
    const { movies } = this.state;
    const { results, page } = movies;
    return (
      <div>
        <h1 className="App-main-title">{this.props.title}</h1>
        {results && <List list={results} />}
        <Button
          className="button"
          onClick={() => this.getMovies(this.props.section, page + 1)}
          text="Load more"
        />
      </div>
    );
  }
}

export default Main;
