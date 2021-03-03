import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    console.log("Increment was clicked!", this); // undefined
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    else
      return (
        <React.Fragment>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm"
          >
            Element
          </button>
          <ul>
            {this.state.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </React.Fragment>
      );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && <p>Please create a new tag!</p>}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
