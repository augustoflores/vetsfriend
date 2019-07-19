import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import qr from 'qr-image';

import api from '../lib/api';

const INITIAL_STATE = {
  previousConditions:[],
  vaccines:[],
  dateOfBirth:"",
  sex:""
};

function File (props){
  const { id } = props.match.params
  const [state,setState] = useState(INITIAL_STATE)
  useEffect(()=>{
      async function getData(){
        const pet = await api.getPet(id);
        setState(pet);
      }
      getData()
  },[])

  const petinfo = state

  const previousConditions = state.previousConditions.map((conds) => (
    <div  className="details" key={conds}>
      {conds}
    </div>
  ));
  const vaccines = state.vaccines.map((vacc) => (
    <div  className="details" key={vacc}>
      {vacc}
    </div>
  ));
  let sexo=""
  if(state.sex==="M"){
    sexo="Macho"
  }else if(state.sex==="F"){
    sexo="Hembra"
  }else{
    sexo=""
  }

    return (
      <div className="main container">
      <div className="row top-pet-details-wrapper">
        <div className="col-4 col-sm-4 top-pet-details-col justify-content-center">
          <span className="pet-img-larger">
            <img src={petinfo.photo} alt="Picture of a pet."/>
          </span>
          <div className="col-wrapper ml-4">
            <div className="pet-details nombre">{petinfo.name}</div>
            <div className="">
              <span className="pet-details-bold">Dueño:</span>
              <span className="pet-details">{petinfo.ownerName}</span>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-4 top-pet-details-col">
          <div className="col-wrapper">
            <div className="">
              <span className="pet-details-bold">Especie:</span>
              <span className="pet-details">{petinfo.specie}</span>
            </div>
            <div className="">
              <span className="pet-details-bold">Raza:</span>
              <span className="pet-details">{petinfo.breed}</span>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-4 top-pet-details-col">
          <div className="col-wrapper">
            <div className="pet-details-bold">Condición:</div>
              {previousConditions}
          </div>
        </div>
      </div>

      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <a className="nav-link active" href="#tab-expediente" aria-controls="tab-expediente" data-toggle="tab">Expediente</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#tab-vacunas" aria-controls="tab-vacunas" data-toggle="tab">Vacunas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  d-none" href="#tab-documentos" aria-controls="tab-documentos" data-toggle="tab">Documentos</a>
        </li>
      </ul>

      <div className="tab-content">
        <div role="tabpanel" className="tab-pane active" id="tab-expediente">
          <div className="container tab-expediente">
            <div className="row">

              <div className="col-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <b>Fecha de Nacimiento:</b> {petinfo.dateOfBirth.substring(0,10)}<br/>
                    <b>Sexo: {sexo} </b>
                    <br/><br/><br/>
                    <h3>Descripción</h3>
                    {petinfo.description}
                  </div>
                </div>
              </div>

              <div className="col-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="column-header">
                      <center>
                        <div dangerouslySetInnerHTML={{ __html: qr.imageSync(id, { type: 'svg', size: 5 }) }}></div>
                      </center>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div role="tabpanel" className="tab-pane" id="tab-vacunas">
          {vaccines}
        </div>
        <div role="tabpanel" className="tab-pane" id="tab-documentos">
          Documentos.
        </div>
      </div>

      <div className="row">
        <div className="col-4 col-sm-4">
          <div className="">
          </div>
        </div>
        <div className="col-4 col-sm-4">
          <div className="">
          </div>
        </div>
        <div className="col-4 col-sm-4">
          <div className="">
          </div>
        </div>
      </div>
      </div>





    );

}

export default File;
