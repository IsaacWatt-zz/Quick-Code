import React, { Component } from 'react'
import NavBar from './components/NavBar'
import CenteredGrid from './components/CharacterCard'
import axios from 'axios';
import Embed from 'runkit-embed-react';
import Code from "./components/Code";

import './components/text.css';

var headers = {
    'Content-Type': 'text/plain',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
}

let data = '';
// Get data back here 

axios.post("https://cognitivecodeapp.azurewebsites.net/speachToText/v1.0/toCode",
  data, // this data param must be from the Code state (the blob or whatever)
  {headers: headers})
    .then((response) => {
        console.log(response);
        if (response.data.topScoringIntent.intent == "print.helloWorld") {
          data += "console.log()"
        }
    })
    .catch((error) => {
        console.log(error);
    });

class App2 extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div id="my-element">
          <Embed source={" " + data} />
        </div>
        <Code />
      </div>
    )
  }
}
export default App2
