import React, { Component } from "react";
import InputRange from "react-input-range";

import "./Filter.css";

class Filters extends Component {
  updateFilters = value => {
    this.props.updateFilters(value);
  };
  render() {
    return (
      <div>
        <ul className="filters-list">
          <li className="filters-list__item">
            <span className="filters-label">
              Rating from {this.state.filters.rating.min} to{" "}
              {this.state.filters.rating.max}
              Rating from {this.props.filters.rating.min} to{" "}
              {this.props.filters.rating.max}
            </span>
            <InputRange
              maxValue={10}
              minValue={0}
              value={this.state.filters.rating}
              onChange={value => this.setState({ filters: { rating: value } })}
              onChangeComplete={value => console.log(value)}
            />
            value={this.props.filters.rating}
            onChange=
            {value => {
              this.updateFilters(value);
            }}{" "}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Filters;
