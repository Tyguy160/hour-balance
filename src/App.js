import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Day from "./components/day";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">Hour Balance</header> */}
        <Day />
      </div>
    );
  }
}

export default App;
