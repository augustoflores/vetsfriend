import React from 'react';

import styles from './index.module.css';

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
    <div className="card" id={id}>
      <div className="card-body d-flex justify-content-between align-items-center">
        <span className="pet-img">
          <img src={photo} alt={name} />
        </span>
        <span className="d-inline-block">
          <h5 id="pet-name" className="card-title pet-name">{name}</h5>
          <h6 id="pet-id" className="mb-2 pet-id">{id}</h6>
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

  )
}

export default Card;
