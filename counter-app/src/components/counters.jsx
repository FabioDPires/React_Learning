import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className=" btn btn-warning m-2">
          Reset
        </button>
        <br></br>
        <br></br>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
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
