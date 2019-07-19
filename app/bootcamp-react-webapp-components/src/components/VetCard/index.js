import React from 'react';
import qr from 'qr-image';
import {Link} from 'react-router-dom'


function Card(props) {
  const {
    name,
    specie,
    breed,
    dateOfBirth,
    description,
    photo,
    vaccines,
    previousConditions,
    ownerId,
    clinics,
    vets,
    id,
    children
  } = props;


  return (
    <div className="card">
    <div className="card-body d-flex justify-content-between align-items-center">
      <div id="pet-name" className="d-inline-block card-time">11:00am</div>
      <span className="pet-img">
        <img src={photo} alt="Picture of a pet."/>
      </span>
      <span className="d-inline-block">
        <h5 id="pet-name" className="card-title pet-name">{name}</h5>
        <h6 id="pet-id" className="card-subtitle mb-2 pet-id">
          <div dangerouslySetInnerHTML={{ __html: qr.imageSync(id, { type: 'svg', size: 2 }) }}></div>
        </h6>
      </span>
      <span className="d-inline-block">
        <h5 id="appointment-date" className="card-title">22 de mayo</h5>
        <h6 id="attendance-status" className="card-subtitle mb-2 attendance-status"></h6>
      </span>
      <span className="d-inline-block">
        <Link className="btn btn-outline-primary card-button" to={`/file/${id}`} role="button">
          <i className="fas fa-clipboard"></i>
        </Link>
      </span>
      <span className="d-inline-block">
      </span>
    </div>
  </div>



  )
}

export default Card;
