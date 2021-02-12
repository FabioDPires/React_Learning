import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: 4,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} id={counter.id}>
            <h4>Counter # {counter.id}</h4>
          </Counter>
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