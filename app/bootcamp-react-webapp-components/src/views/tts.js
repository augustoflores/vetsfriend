import React, { useState, useEffect } from 'react'
//import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone'

import { Link } from 'react-router-dom';
import PetForm from '../components/PetForm';
import PetInfo from '../components/PetInfo';
import api from '../lib/api';
import Iframe from 'react-iframe'


// Display events on the console.
function onEvent(name, event) {
    console.log(name, JSON.stringify(event, null, 2));
};

const INITIAL_STATE = {

};

function TTS (props){


    return (
      <div className="main container">
      <div className="row">
      <Iframe url="https://stt-vets.mybluemix.net/"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
      </div>
      </div>
    )
}

export default TTS
