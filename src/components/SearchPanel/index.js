import React, { Component } from "react";

class SearchPanel extends Component {
  state = {
    term: ""
  };
  onSearchChange = e => {
    this.setState({
      term: e.target.value
    });
    this.props.onSearchChange(e.target.value);
  };
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}

export default SearchPanel;
