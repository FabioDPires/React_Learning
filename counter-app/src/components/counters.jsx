import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className=" btn btn-warning m-2">
          Reset
        </button>
        <br></br>
        <br></br>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
          ></Counter>
        ))}
      </div>
    );
  }

  //It is possible to pass content as children to counter component like this

  /*
    {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} id={counter.id}>
            <h4>Counter # {counter.id}</h4>
          </Counter>
        ))}
  */
}

export default Counters;
