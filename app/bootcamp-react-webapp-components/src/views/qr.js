import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PetForm from '../components/PetForm';
import PetInfo from '../components/PetInfo';
import api from '../lib/api';

const INITIAL_STATE = {

};

function QR (props){
    function qrinit(){
      window.qrinit();
    }

    return (
      <div className="main container">
      <div className="row">
          <a onClick={()=>qrinit()}>Leer QR</a><br/>
          <div id="loadingMessage" hidden="">⌛ Loading video...</div>
          <canvas id="canvas" height="480" width="640"></canvas>
          <div id="output">
            <div id="outputMessage">No QR code detected.</div>
            <div hidden=""><b>Data:</b> <span id="outputData"></span></div>
          </div>
      </div>
      </div>
    )
}

export default QR
