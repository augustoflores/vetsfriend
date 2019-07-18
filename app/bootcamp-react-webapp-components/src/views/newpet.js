import React from 'react';

import PetForm from '../components/PetForm';
import api from '../lib/api'

function NewPet (props)  {
  async function onSubmit(petInfo){
    const NewPetResponse = await api.newPet(petInfo)
    if(NewPetResponse) props.history.push('/')
  }

    return (
      <div className="container">
        <PetForm onSubmit={onSubmit} />
      </div>
    )

}

export default NewPet;
