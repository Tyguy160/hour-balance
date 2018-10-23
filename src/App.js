import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Day from "./components/day";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">Hour Balance</header> */}
        <Day day={"Sunday"} />
        <Day day={"Monday"} />
        <Day day={"Tuesday"} />
        <Day day={"Wednesday"} />
        <Day day={"Thursday"} />
        <Day day={"Friday"} />
        <Day day={"Saturday"} />
      </div>
    );
  }
}

export default App;
