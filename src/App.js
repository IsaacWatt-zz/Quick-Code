import React, { Component } from "react";
import NavBar from "./components/NavBar";
import CenteredGrid from "./components/CharacterCard";
import Code from "./components/Code";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CenteredGrid />
        <Code />
      </div>
    );
  }
}

export default App;
