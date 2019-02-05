import React, { Component } from 'react'
import NavBar from './components/NavBar'
import CenteredGrid from './components/CharacterCard'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <CenteredGrid />
      </div>
    );
  }
}

export default App;
