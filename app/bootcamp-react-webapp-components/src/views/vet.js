import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import qr from 'qr-image';

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
      <div className="main container">
      <div className="row">
        <div className="col-12 col-sm-7">
          <div className="main-column">
            <div className="column-header d-flex justify-content-between align-items-center">
              <h3>Tus pacientes</h3>
            </div>

              <form className="form-inline d-flex justify-content-between">
                <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
              </form>

              {cards}


          </div>
        </div>
        <div className="col-12 col-sm-5">
          <div className="side-column">


            <div className="side-card">
              <div className="d-flex">
                <span className="pet-img-larger">
                  <img src="./img/Havanese-puppy.jpg" alt="Picture of a pet."/>
                </span>
              </div>
              <div className="card-body text-center p-1 pb-3">
                <div className="side-pet-name">Colette</div>
              </div>

              <div className="preview-details-wrapper">
                <div className="preview-details-title pb-1 d-none">Responsable</div>
                <div className="d-flex align-items-center">
                  <div className="owner-icon d-inline-block">
                  <div dangerouslySetInnerHTML={{ __html: qr.imageSync("id", { type: 'svg', size: 5 }) }}></div>

                  </div>
                  <div className="pl-2  d-inline-block">
                    <div className="preview-details-subtitle">Nathan Kim</div>
                    <div className="preview-details-text">(916) 756-3141</div>
                  </div>
                </div>
              </div>

              <div className="preview-details-wrapper">
                <div className="preview-details-title pb-1">Siguiente consulta</div>
                <div className="pl-2  d-none">
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

              <div className="preview-details-wrapper d-none">
                <div className="preview-details-title pb-1">Ubicación</div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="pl-2 preview-details-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris magna velit, luctus volutpat aliquet ut, condimentum ac augue.</p>
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

export default Vet;
