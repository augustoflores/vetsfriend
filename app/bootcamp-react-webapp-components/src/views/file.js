import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PetForm from '../components/PetForm';
import PetInfo from '../components/PetInfo';
import api from '../lib/api';

const INITIAL_STATE = {

};

function File (props){

    return (
      <div className="main container">
      <div className="row top-pet-details-wrapper">
        <div className="col-4 col-sm-4 top-pet-details-col justify-content-center">
          <span className="pet-img-larger">
            <img src="./img/Havanese-puppy.jpg" alt="Picture of a pet."/>
          </span>
          <div className="col-wrapper ml-4">
            <div className="pet-details nombre">Colette</div>
            <div className="">
              <span className="pet-details-bold">Dueño:</span>
              <span className="pet-details">Nathan Kim</span>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-4 top-pet-details-col">
          <div className="col-wrapper">
            <div className="">
              <span className="pet-details-bold">Especie:</span>
              <span className="pet-details">Perro</span>
            </div>
            <div className="">
              <span className="pet-details-bold">Raza:</span>
              <span className="pet-details">Habanese</span>
            </div>
          </div>
        </div>
        <div className="col-4 col-sm-4 top-pet-details-col">
          <div className="col-wrapper">
            <div className="pet-details-bold">Condición:</div>
            <div className="details">Enfermedad 1</div>
            <div className="details">Enfermedad 2</div>
            <div className="details">Esterilizado</div>
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
          <a className="nav-link" href="#tab-documentos" aria-controls="tab-documentos" data-toggle="tab">Documentos</a>
        </li>
      </ul>

      <div className="tab-content">
        <div role="tabpanel" className="tab-pane active" id="tab-expediente">
          <div className="container tab-expediente">
            <div className="row">

              <div className="col-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h3>Diagnósticos</h3>
                    This is some text within a card body.
                  </div>
                </div>
              </div>

              <div className="col-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="column-header">
                      <h3>Medicamentos</h3>
                      <button href="#" className="btn-add-pet"><i className="fas fa-plus"></i></button>
                    </div>
                    This is some text within a card body.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div role="tabpanel" className="tab-pane" id="tab-vacunas">
          Vacunas.
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
