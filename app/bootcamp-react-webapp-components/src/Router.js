import React from 'react';
import Index from './views/index';
import NewPet from './views/newpet';
import Pet from './views/pet';
import Vet from './views/vet';
import Owner from './views/owner';
import QR from './views/qr';
import TTS from './views/tts';
import File from './views/file';
import Login from './views/login';

import { Switch, Route} from 'react-router-dom';

const Router = ()=>(
  <Switch>
    <Route path="/"  component={Login} exact/>
    <Route path="/vet" component={Vet} exact/>
    <Route path="/owner" component={Owner} exact/>
    <Route path="/qr" component={QR} exact/>
    <Route path="/tts" component={TTS} exact/>
    <Route path="/file/:id" component={File} exact/>
    <Route path="/new-pet" component={NewPet} exact/>
    <Route path="/pet/:id" component={Pet} exact/>

  </Switch>
)


export default Router
