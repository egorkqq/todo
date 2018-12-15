import React, { Component } from "react";
import "./AddItem.sass";

class AddItem extends Component {
  state = {
    label: ""
  };
  onLabelChange = e => {
    this.setState({ label: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onAddItem(this.state.label);
    this.setState({ label: "" });
  };
  render() {
    return (
      <form className="item-add-form" onSubmit={this.onSubmit}>
        <input
          className="form-control"
          onChange={this.onLabelChange}
          type="text"
          placeholder="What need to be done?"
          value={this.state.label}
        />
        <button className="form-control btn">Add</button>
      </form>
    );
  }
}

export default AddItem;
