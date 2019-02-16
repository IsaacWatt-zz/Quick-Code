import React, { Component } from 'react'
import NavBar from './components/NavBar'
import CenteredGrid from './components/CharacterCard'
import axios from 'axios';
import Button from "@material-ui/core/Button";

import Embed from 'runkit-embed-react';
//import Code from "./components/Code";
import { ReactMic, saveRecording } from "react-mic";

import './components/text.css';
import audioFile from './audio.wav'

import Recorder from 'recorder-js';
import parseIntent from './parseIntent.js';

const audioContext =  new (window.AudioContext || window.webkitAudioContext)();

const recorder = new Recorder(audioContext, {
  // An array of 255 Numbers
  // You can use this to visualize the audio stream
  // If you use react, check out react-wave-stream
  // onAnalysed: data => console.log(data),
});



let isRecording = false;
let blob = null;

navigator.mediaDevices.getUserMedia({audio: true})
  .then(stream => recorder.init(stream))
  .catch(err => console.log('Uh oh... unable to get stream...', err));

function startRecording() {
  recorder.start()
    .then(() => isRecording = true);
}

function stopRecording() {
  recorder.stop()
    .then(({blob, buffer}) => {
      blob = blob;
      // buffer is an AudioBuffer
    });
}

function download(theblob) {
  Recorder.download(theblob, 'audio.wav'); // downloads a .wav file
}

var headers = {
    'Content-Type': 'audio/webm',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
}
var data = "";
var dataAsArray = [];

var mediaDevices;
var mediaRecorder;
var blobs;
var chunks = [];
var options = {
  audioBitsPerSecond: 16000,
}

var constraints = {
  audio: {
    channelCount: 1,
    sampleRate: 16000
  },
  video: false,
};

//console.log('m',mediaDevices);
class IDE extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blobObject: null,
      isRecording: false
    };
  }

  startRecording = () => {
    this.setState({
      record: true,
      isRecording: true
    });

    var mediaDevices = navigator.mediaDevices;
    mediaDevices.getUserMedia(constraints).then(function(stream) {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      }

      console.log('mediaRecorder', mediaRecorder.state)

      mediaRecorder.start();
      console.log('mediaRecorder', mediaRecorder.state)
      console.log(mediaRecorder.state);
      console.log("recorder started");
    });
  };

  stopRecording = () => {
    var myApp = this;
    var theIntent = {};
    console.log('mediaRecorder', mediaRecorder.state)

    mediaRecorder.onstop = function(e) {

      console.log('recording stopped');
      console.log('recording stopped', e.data);
      var theBlob = new Blob(chunks, {
        'type': 'audio/ogg; codecs=opus'
      });

      const config = {
        headers: { 'content-type': 'multipart/form-data' }
      }
      axios.post('https://cognitivecodeapp.azurewebsites.net/speachToText/v1.0/toCode', {data: theBlob}, config).then((res) => {
        console.log('res', res);
        theIntent = res;
      }).catch((error) => {
        console.log('error');
      })
    }

    mediaRecorder.stop();

    this.setState({
      record: false,
      isRecording: false
    });

    dataAsArray = parseIntent(theIntent, dataAsArray);
    data = this.dataAsString(dataAsArray);
  };

  onSave = blobObject => {};

  dataAsString(dataAsArray) {
    var str = "";
    dataAsArray.forEach(element => {
      str += element + "\n";
    });
    return str;
  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="my-element">
          <Embed source={data} />
        </div>
        <div className="test123">
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          visualSetting="sinewave"
          audioBitsPerSecond={16000}
          onStop={this.onStop}
          onStart={this.onStart}
          onSave={this.onSave}
          onData={this.onData}
          strokeColor="#FE6B8B"
          backgroundColor="white"
        />
        <br />
        <br />
        <Button
          className="btn"
          secondary={true}
          disabled={this.state.isRecording}
          onClick={this.startRecording}
        >
          Begin Rec
        </Button>
        <Button
          className="btn"
          secondary={true}
          disabled={!this.state.isRecording}
          onClick={this.stopRecording}
        >
          End Rec
        </Button>
      </div>
      </div>
    )
  }
}
export default IDE
