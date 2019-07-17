import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PetForm from '../components/PetForm';
import PetInfo from '../components/PetInfo';
import api from '../lib/api';

const INITIAL_STATE = {

};

function Vet (props){

    return (
      <div class="main container">
      <div class="row">
        <div class="col-7 col-sm-7">
          <div class="main-column">
            <div class="column-header d-flex justify-content-between align-items-center">
              <h3>Tus pacientes</h3>
            </div>

              <form class="form-inline d-flex justify-content-between">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>

            <div class="card">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div id="pet-name" class="d-inline-block card-time">11:00am</div>
                <span class="pet-img">
                  <img src="./img/Havanese-puppy.jpg" alt="Picture of a pet."/>
                </span>
                <span class="d-inline-block">
                  <h5 id="pet-name" class="card-title pet-name">Colette</h5>
                  <h6 id="pet-id" class="card-subtitle mb-2 pet-id">ID10002050</h6>
                </span>
                <span class="d-inline-block">
                  <h5 id="appointment-date" class="card-title">22 de mayo</h5>
                  <h6 id="attendance-status" class="card-subtitle mb-2 attendance-status">Status</h6>
                </span>
                <span class="d-inline-block">
                  <a class="btn btn-outline-primary card-button" href="#" role="button">
                    <i class="fas fa-clipboard"></i>
                  </a>
                </span>
                <span class="d-inline-block">
                </span>
              </div>
            </div>



            <div class="card">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div id="pet-name" class="d-inline-block card-time">11:00am</div>
                <span class="pet-img">
                  <img src="./img/Havanese-puppy.jpg" alt="Picture of a pet."/>
                </span>
                <span class="d-inline-block">
                  <h5 id="pet-name" class="card-title pet-name">Colette</h5>
                  <h6 id="pet-id" class="card-subtitle mb-2 pet-id">ID10002050</h6>
                </span>
                <span class="d-inline-block">
                  <h5 id="appointment-date" class="card-title">22 de mayo</h5>
                  <h6 id="attendance-status" class="card-subtitle mb-2 attendance-status">Status</h6>
                </span>
                <span class="d-inline-block">
                  <a class="btn btn-outline-primary card-button" href="#" role="button">
                    <i class="fas fa-clipboard"></i>
                  </a>
                </span>
                <span class="d-inline-block">
                </span>
              </div>
            </div>



            <div class="card">
              <div class="ad-card card-body">
                ad space
              </div>
            </div>



            <div class="card">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div id="pet-name" class="d-inline-block card-time">11:00am</div>
                <span class="pet-img">
                  <img src="./img/Havanese-puppy.jpg" alt="Picture of a pet."/>
                </span>
                <span class="d-inline-block">
                  <h5 id="pet-name" class="card-title pet-name">Colette</h5>
                  <h6 id="pet-id" class="card-subtitle mb-2 pet-id">ID10002050</h6>
                </span>
                <span class="d-inline-block">
                  <h5 id="appointment-date" class="card-title">22 de mayo</h5>
                  <h6 id="attendance-status" class="card-subtitle mb-2 attendance-status">Status</h6>
                </span>
                <span class="d-inline-block">
                  <a class="btn btn-outline-primary card-button" href="#" role="button">
                    <i class="fas fa-clipboard"></i>
                  </a>
                </span>
                <span class="d-inline-block">
                </span>
              </div>
            </div>


          </div>
        </div>
        <div class="col-5 col-sm-5">
          <div class="side-column">


            <div class="side-card">
              <div class="d-flex">
                <span class="pet-img-larger">
                  <img src="./img/Havanese-puppy.jpg" alt="Picture of a pet."/>
                </span>
              </div>
              <div class="card-body text-center p-1 pb-3">
                <div class="side-pet-name">Colette</div>
              </div>

              <div class="preview-details-wrapper">
                <div class="preview-details-title pb-1">Responsable</div>
                <div class="d-flex align-items-center">
                  <div class="owner-icon d-inline-block">
                    <img src="./img/owner-1.jpeg" alt="Picture of a pet."/>
                  </div>
                  <div class="pl-2  d-inline-block">
                    <div class="preview-details-subtitle">Nathan Kim</div>
                    <div class="preview-details-text">(916) 756-3141</div>
                  </div>
                </div>
              </div>

              <div class="preview-details-wrapper">
                <div class="preview-details-title pb-1">Siguiente consulta</div>
                <div class="pl-2">
                  <span class="preview-details-text side-attendance-status">Status</span>
                </div>
                <div class="pl-2">
                  <span class="preview-details-subtitle">Fecha:</span>
                  <span class="preview-details-text">27/07/2019</span>
                </div>
                <div class="pl-2">
                  <span class="preview-details-subtitle">Hora:</span>
                  <span class="preview-details-text">11:30</span>
                </div>
              </div>

              <div class="preview-details-wrapper">
                <div class="preview-details-title pb-1">Ubicación</div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="pl-2 preview-details-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna velit, luctus volutpat aliquet ut, condimentum ac augue.</p>
                </div>
              </div>
              <div class="side-card-button-wrapper">
                <button type="button" class="btn-ver-expediente">Ver expediente</button>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>




    );

}

export default Vet;
