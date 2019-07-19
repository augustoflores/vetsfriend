import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/VetCard';
import api from '../lib/api';

const INITIAL_STATE = {

};

function Vet (props){
  const [state,setState] = useState([])
  //state={
  //}
  useEffect(()=>{
      async function getData(){
        const pets = await api.getPetsByVetId("5d29db3c8a7d740d934a778e");
        let obj ={
          currentpet:[],
          mypets:pets
        }
        console.log(obj);
        setState(pets);
      }
      getData()
  },[])

  const cards = state.map((petInfo) => (
    <div key={petInfo.id}>
      <Card {...petInfo}>
      </Card>
    </div>
  ));

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

              {cards}


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
