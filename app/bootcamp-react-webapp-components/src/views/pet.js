import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PetForm from '../components/PetForm';
import PetInfo from '../components/PetInfo';
import api from '../lib/api';

const INITIAL_STATE = {
  ageInMonths: 0,
  breed: '',
  isAdopted: false,
  name: '',
  owner: '',
  img: '',
  size: '',
  species: '',
  userId: '',
  description: '',
  edit: false,
};

function Pet (props){

  const [state,setState] = useState([INITIAL_STATE])
  const { id } = props.match.params;

  async function onSubmit(formData){
    const updatePetResponse= await api.updatePet(id,{photo:formData.img,...formData})

    if(updatePetResponse)props.history.push(props.location.pathname)

  }

  useEffect(()=>{
    async function fetchData(){
      const pet = await api.getPet(id)
      console.log(pet)
      if(state.name!==pet.name) setState({...state,img:pet.photo,...pet})
    }

    const { search } = props.location;
    if (search) {
      const str = search.replace('?', '');
      const [key, value] = str.split('=');
      const query = { [key]: JSON.parse(value) };
      if (state.edit !== query.edit) setState({...state,...query});
    } else {
      if (state.edit === true) setState({ ...state,edit: false });
    }
    fetchData();
  },[props,state,id])



    const child = state.edit
      ? <PetForm
        {...state}
        onSubmit={onSubmit}
      />
      : <PetInfo {...state} />

    return (
      <div className="container">
        <Link
          className={`btn btn-${state.edit ? 'danger' : 'info'}`}
          to={`${props.location.pathname}${state.edit ? '' : '?edit=true'}`}
        >
          { state.edit ? 'Cancel edit' : 'Edit' }
        </Link>

        { child }
      </div>
    );

}

export default Pet;
