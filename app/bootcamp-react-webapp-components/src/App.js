import React from 'react';

import {BrowserRouter} from 'react-router-dom';

import Navbar from './components/Navbar';
import Router from './Router'

import './app.css';

const App = () => (
  <BrowserRouter>
  <section id="app">

      <div className="modal fade" id="registro" tabIndex="-1" role="dialog" aria-labelledby="registro" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Registro</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                  <a className="nav-link active" href="#tab-registro-owner" aria-controls="tab-registro-owner"
                    data-toggle="tab">Dueño de mascota</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tab-registro-vet" aria-controls="tab-registro-vet"
                    data-toggle="tab">Veterinario</a>
                </li>
              </ul>

              <div className="tab-content">

                <div role="tabpanel" className="tab-pane active" id="tab-registro-owner">
                  <div className="container tab-registro-owner">

                    <h6>Nombre(s)</h6>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Nombre(s)"/>
                    </div>

                    <h6>Apellidos</h6>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Apellidos"/>
                    </div>

                    <h6>Correo</h6>
                    <div className="input-group mb-3">
                      <input type="email" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Correo"/>
                    </div>

                    <h6>Tel.</h6>
                    <div className="input-group mb-3">
                      <input type="tel" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Tel."/>
                    </div>

                    <h6>Contraseña</h6>
                    <div className="input-group mb-3">
                      <input type="password" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Tu contraseña"/>
                    </div>

                    <h6>Confirma tu contraseña</h6>
                    <div className="input-group mb-3">
                      <input type="password" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Tu contraseña"/>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Cancelar</button>
                      <button type="button" className="btn btn-outline-primary">Ingresar</button>
                      <button type="button" className="btn btn-primary">Crear cuenta</button>
                    </div>
                  </div>
                </div>

                <div role="tabpanel" className="tab-pane" id="tab-registro-vet">
                  <div className="container tab-registro-owner">

                    <h6>Nombre(s)</h6>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Nombre(s)"/>
                    </div>

                    <h6>Apellidos</h6>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Apellidos"/>
                    </div>

                    <h6>Correo</h6>
                    <div className="input-group mb-3">
                      <input type="email" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Correo"/>
                    </div>

                    <h6>Cédula profesional</h6>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Cédula profesional"/>
                    </div>

                    <h6>Dirección</h6>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Escribe tu dirección"/>
                    </div>

                    <h6>Tel.</h6>
                    <div className="input-group mb-3">
                      <input type="tel" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Tel."/>
                    </div>

                    <h6>Contraseña</h6>
                    <div className="input-group mb-3">
                      <input type="password" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Tu contraseña"/>
                    </div>

                    <h6>Confirma tu contraseña</h6>
                    <div className="input-group mb-3">
                      <input type="password" className="form-control" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default" placeholder="Tu contraseña"/>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Cancelar</button>
                      <button type="button" className="btn btn-primary">Crear cuenta</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="login" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content login-modal">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Ingresar</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <h6>Correo</h6>
              <div className="input-group mb-3">
                <input type="email" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"
                  placeholder="Correo"/>
              </div>

              <h6>Contraseña</h6>
              <div className="input-group mb-3">
                <input type="password" className="form-control" aria-label="Default"
                  aria-describedby="inputGroup-sizing-default" placeholder="Contraseña"/>
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button"className="btn btn-primary">Ingresar</button>
            </div>
          </div>
        </div>
      </div>
      <Navbar  />
      <div className="main-content">
        <Router/>
      </div>
    </section>
  </BrowserRouter>
)

export default App;
