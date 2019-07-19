export default {
  async getPets() {
    const response = await fetch('https://vetsfriend-api.mybluemix.net/pets');
    const { payload } = await response.json();
    const list = payload.pets.map((pet) => {
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
        _id: id,
      } = pet;
      return {
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
      };
    });
    return list;
  },
  async getPetsByOwnerId(id) {
    const response = await fetch('https://vetsfriend-api.mybluemix.net/pets/owner/'+id);
    const { payload } = await response.json();
    const list = payload.pets.map((pet) => {
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
        _id: id,
      } = pet;
      return {
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
      };
    });
    return list;
  },
  async getPetsByVetId(id) {
    const response = await fetch('https://vetsfriend-api.mybluemix.net/pets/vet/'+id);
    const { payload } = await response.json();
    const list = payload.pets.map((pet) => {
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
        _id: id,
      } = pet;
      return {
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
      };
    });
    return list;
  },
  async deletePet(id) {
    const response = await fetch(`https://pets-api-agus-shiny-bilby.mybluemix.net/pets/${id}`, {
      method: 'DELETE',
    });
    const { succes } = await response.json();
    return succes;
  },
  async adoptPet(id) {
    const response = await fetch(`https://pets-api-agus-shiny-bilby.mybluemix.net/pets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isAdopted: true }),
    });
    const { succes } = await response.json();
    return succes;
  },
  async newPet(formData) {
    const response = await fetch('https://pets-api-agus-shiny-bilby.mybluemix.net/pets/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        breed: formData.breed,
        photo: formData.img,
        ageInMonths: 1,
        size: 'medium',
        species: 'dog',
        owner: 'me',
        userId: 0,
      }),
    });

    const { success } = await response.json();

    if (success) this.props.history.push('/');
  },
  async getPet(petId) {
    const response = await fetch(`https://vetsfriend-api.mybluemix.net/pets/${petId}`);

    const { payload } = await response.json();

    const { pet } = payload;

    return  pet ;
  },
  async updatePet(petId,body) {

    const response = await fetch(`https://pets-api-agus-shiny-bilby.mybluemix.net/pets/${petId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const { succes } = await response.json();

    return succes
  }
};
