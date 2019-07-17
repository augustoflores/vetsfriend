import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar';
import Router from './Router'

import './app.css';

const App = () => (
  <BrowserRouter>
    <section id="app">


    <Navbar/>
  <div className="main-content">
    <Router/>
  </div>
    </section>
  </BrowserRouter>
)

export default App;
