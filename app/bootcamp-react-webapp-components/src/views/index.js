import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import api from '../lib/api'
function Index (props) {
  const [state,setState] = useState([])

  async function onDelete(petID){
    const deleteResponse= await api.deletePet(petID)
    if (deleteResponse){
      const pets = await api.getPets();
      setState(pets)
    }
  }
  async function onAdopt(petID){
    const adoptResponse= await api.adoptPet(petID)
    if (adoptResponse){
      const pets = await api.getPets();
      setState(pets)
    }
  }

  useEffect(()=>{
    async function getData(){
      const pets = await api.getPets();
      setState(pets);
    }
    getData()
},[])


    const cards = state.map((petInfo) => (
      <div
        className="col-md-4"
        key={petInfo.id}
      >
        <Card {...petInfo}>
          <CustomButton
                    onClick={()=>onDelete( petInfo.id)}
            text="Delete"
            className="is-danger"
          />
          <Link
            to ={`pet/${petInfo.id}`}
            className="btn btn-primary">
            Detalle
          </Link>
          { !petInfo.adopt
              ?

                  <CustomButton
                  onClick={()=>onAdopt(petInfo.id)}
                  text="Adoptar"
                    className="is-success"
                  />
              :
                'Ya esta adoptado'
          }
        </Card>
      </div>
    ));

    return (
      <div className="container">
        <div className="row">
          { cards }
        </div>
      </div>
    )

}

export default Index;
