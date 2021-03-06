import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"],
  };

  //CSS
  styles = {
    fontSize: "10px",
    fontWeight: "bold",
  };

  //one way to handle event handlers. The other way is using arrow functions
  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {this.state.tags.length === 0 && <p>Please create a new tag!</p>}
        {this.renderTags()}
      </React.Fragment>
    );

    //if I want to access the content passed by the father component I should do
    //{this.props.children}
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default Counter;
