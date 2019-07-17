import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PetForm from '../components/PetForm';
import PetInfo from '../components/PetInfo';
import api from '../lib/api';

const INITIAL_STATE = {

};

function Owner (props){

    return (

      <div className="main container">
      <div className="row">
        <div className="col-7 col-sm-7">
          <div className="main-column">
            <div className="column-header d-flex justify-content-between align-items-center">
              <h3>Tus amigos</h3>
              <button href="#" className="btn-add-pet"><i className="fas fa-plus"></i> Mascota</button>
            </div>
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="pet-img">
                  <img src="./img/Havanese-puppy.jpg" alt="Picture of a pet." />
                </span>
                <span className="d-inline-block">
                  <h5 id="pet-name" className="card-title pet-name">Colette</h5>
                  <h6 id="pet-id" className="card-subtitle mb-2 pet-id">ID10002050</h6>
                </span>
                <span className="d-inline-block">
                  <h5 id="appointment-date" className="card-title">22 de mayo</h5>
                  <h6 id="attendance-status" className="card-subtitle mb-2 attendance-status">Status</h6>
                </span>
                <span className="d-inline-block">
                  <a className="btn btn-outline-primary card-button" href="#" role="button">
                    <i className="fas fa-calendar-alt"></i>
                  </a>
                  <a className="btn btn-outline-primary card-button" href="#" role="button">
                    <i className="fas fa-clipboard"></i>
                  </a>
                </span>
                <span className="d-inline-block">
                  <div className="btn-group dropleft">
                    <button type="button" className="btn btn-secondary dropdown-toggle caret-off" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Agendar cita</a>
                      <a className="dropdown-item" href="#">Ver expediente</a>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="pet-img">
                  <img src="./img/Havanese-puppy.jpg" alt="Picture of a pet." />
                </span>
                <span className="d-inline-block">
                  <h5 id="pet-name" className="card-title pet-name">Colette</h5>
                  <h6 id="pet-id" className="card-subtitle mb-2 pet-id">ID10002050</h6>
                </span>
                <span className="d-inline-block">
                  <h5 id="appointment-date" className="card-title">22 de mayo</h5>
                  <h6 id="attendance-status" className="card-subtitle mb-2 attendance-status">Status</h6>
                </span>
                <span className="d-inline-block">
                  <a className="btn btn-outline-primary card-button" href="#" role="button">
                    <i className="fas fa-calendar-alt"></i>
                  </a>
                  <a className="btn btn-outline-primary card-button" href="#" role="button">
                    <i className="fas fa-clipboard"></i>
                  </a>
                </span>
                <span className="d-inline-block">
                  <div className="btn-group dropleft">
                    <button type="button" className="btn btn-secondary dropdown-toggle caret-off" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Agendar cita</a>
                      <a className="dropdown-item" href="#">Ver expediente</a>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <div className="card">
              <div className="ad-card card-body">
                ad space
              </div>
            </div>
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="pet-img">
                  <img src="./img/Havanese-puppy.jpg" alt="Picture of a pet." />
                </span>
                <span className="d-inline-block">
                  <h5 id="pet-name" className="card-title pet-name">Colette</h5>
                  <h6 id="pet-id" className="mb-2 pet-id">ID10002050</h6>
                </span>
                <span className="d-inline-block">
                  <h5 id="appointment-date" className="card-title">22 de mayo</h5>
                  <h6 id="attendance-status" className="card-subtitle mb-2 attendance-status">Status</h6>
                </span>
                <span className="d-inline-block">
                  <a className="btn btn-outline-primary card-button" href="#" role="button">
                    <i className="fas fa-calendar-alt"></i>
                  </a>
                  <a className="btn btn-outline-primary card-button" href="#" role="button">
                    <i className="fas fa-clipboard"></i>
                  </a>
                </span>
                <span className="d-inline-block">
                  <div className="btn-group dropleft">
                    <button type="button" className="btn btn-secondary dropdown-toggle caret-off" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Agendar cita</a>
                      <a className="dropdown-item" href="#">Ver expediente</a>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 col-sm-5">
          <div className="side-column">
            <div className="side-card">
              <div className="d-flex">
                <span className="pet-img-larger">
                  <img src="./img/Havanese-puppy.jpg" alt="Picture of a pet." />
                </span>
              </div>
              <div className="card-body text-center p-1 pb-3">
                <div className="side-pet-name">Colette</div>
              </div>
              <div className="preview-details-wrapper">
                <div className="preview-details-title pb-1">Siguiente consulta</div>
                <div className="pl-2">
                  <span className="preview-details-text side-attendance-status">Status</span>
                </div>
                <div className="pl-2">
                  <span className="preview-details-subtitle">Fecha:</span>
                  <span className="preview-details-text">27/07/2019</span>
                </div>
                <div className="pl-2">
                  <span className="preview-details-subtitle">Hora:</span>
                  <span className="preview-details-text">11:30</span>
                </div>
              </div>
              <div className="preview-details-wrapper">
                <div className="preview-details-title pb-1">Ubicación</div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="pl-2 preview-details-text">3874 Primrose Lane Madison, WI 53718</p>
                  <a className="btn btn-outline-primary card-button" href="#" role="button">
                    <i className="fas fa-map-marker-alt"></i>
                  </a>
                </div>
              </div>
              <div className="preview-details-wrapper">
                <div className="preview-details-title pb-1">Veterinario</div>
                <div className="d-flex align-items-center">
                  <div className="vet-icon d-inline-block">
                    <img src="./img/vet-1.jpg" alt="Picture of a pet." />
                  </div>
                  <div className="pl-2  d-inline-block">
                    <div className="preview-details-subtitle">Andrew Brown</div>
                    <div className="preview-details-text">(801) 945-4834</div>
                  </div>
                </div>
              </div>
              <div className="side-card-button-wrapper">
                <button type="button" className="btn-ver-expediente">Ver expediente</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>





    );

}

export default Owner;
