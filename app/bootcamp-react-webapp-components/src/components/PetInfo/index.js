import React from 'react';

export default function PetInfo(props) {
  return (
    <div className="pet">
      <img
        className="pet-img"
        src={props.img}
        alt="pet"
      />

      <h1 className="h1 pet-name">
        { props.name }
      </h1>

      <h2 className="h5">
        { props.breed }
      </h2>

      <div className={`alert alert-${props.isAdopted ? 'danger' : 'success'}`} role="alert">
        { props.isAdopted ? 'Is adopted :(' : 'Can adopt :D' }
      </div>

      <h3 className="h6">
        { props.size }
      </h3>

      <p>
        { props.description }
      </p>
    </div>
  )
}
