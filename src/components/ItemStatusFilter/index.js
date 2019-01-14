import React, { Component } from "react";
class ItemStatusFilter extends Component {
  state = {};
  renderFilters() {
    const {
      onToggleAllStatus,
      onToggleActiveStatus,
      onToggleDoneStatus,
      currentFilter
    } = this.props;
    switch (currentFilter) {
      default:
        return (
          <div className="btn-group">
            <button onClick={onToggleAllStatus} className="btn btn-info">
              All
            </button>
            <button
              onClick={onToggleActiveStatus}
              className="btn btn-outline-secondary"
            >
              Active
            </button>
            <button
              onClick={onToggleDoneStatus}
              className="btn btn-outline-secondary"
            >
              Done
            </button>
          </div>
        );
      case "active":
        return (
          <div className="btn-group">
            <button
              onClick={onToggleAllStatus}
              className="btn btn-outline-secondary"
            >
              All
            </button>
            <button onClick={onToggleActiveStatus} className="btn btn-info">
              Active
            </button>
            <button
              onClick={onToggleDoneStatus}
              className="btn btn-outline-secondary"
            >
              Done
            </button>
          </div>
        );
      case "done":
        return (
          <div className="btn-group">
            <button
              onClick={onToggleAllStatus}
              className="btn btn-outline-secondary"
            >
              All
            </button>
            <button
              onClick={onToggleActiveStatus}
              className="btn btn-outline-secondary"
            >
              Active
            </button>
            <button onClick={onToggleDoneStatus} className="btn btn-info">
              Done
            </button>
          </div>
        );
    }
  }
  render() {
    return this.renderFilters();
  }
}

export default ItemStatusFilter;
