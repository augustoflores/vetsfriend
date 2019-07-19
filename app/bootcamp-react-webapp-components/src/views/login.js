import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import api from '../lib/api';

const INITIAL_STATE = {

};

function Login (props){

    useEffect(()=>{

    },[])

    return (
      <div className="main container">
        <center>
          <button type="button" className="btn-add-pet m-2" data-toggle="modal" data-target="#login">Ingresar</button>
          <button type="button" className="btn-add-pet m-2" data-toggle="modal" data-target="#registro">Registrarme</button>
        </center>
      </div>
    )
}

export default Login
