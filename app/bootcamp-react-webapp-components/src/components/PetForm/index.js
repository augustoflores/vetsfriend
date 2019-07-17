import React, { useState } from 'react';
import CustomButton from '../CustomButton';

function PetForm (props) {

  const {
    name = '',
    breed = '',
    img = ''
  } = props;

  const [state,setState] = useState({name,breed,img})


  function onChange(event) {
    const { id, value } = event.target;
    setState({ ...state, [id]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    props.onSubmit(state);
  }

    return (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="form-control"
            aria-describedby="pet-name"
            placeholder="Enter the name of the pet"
            value={state.name}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="breed">
            Breed
          </label>
          <input
            id="breed"
            className="form-control"
            aria-describedby="pet-breed"
            placeholder="Enter the breed of the pet"
            value={state.breed}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="img">
            Image Link
          </label>
          <input
            id="img"
            className="form-control"
            aria-describedby="pet-img"
            placeholder="Enter the img link of the pet"
            value={state.img}
            onChange={onChange}
          />
        </div>

        <CustomButton
          className="is-info"
          text="Crear pet"
        />
      </form>
    )

}

export default PetForm;
