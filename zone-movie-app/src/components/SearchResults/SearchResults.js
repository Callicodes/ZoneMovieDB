import React from "react";
import List from "../List/List";

const SearchResults = props => {
  const { result, searchTerm } = props.location.state;

  return (
    <div>
      <h1 className="App-main-title">Search results</h1>
      {result && (
        <div>
          <p>
            There are <b>{result.total_results}</b> results for: "{searchTerm}".
          </p>
          <List list={result.results} />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
