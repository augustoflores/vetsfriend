import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Button, Jumbotron, ListGroup, ListGroupItem } from 'reactstrap'
import Page from '../components/page'
import Layout from '../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
  <div className="header">
    <div className="logo">
      <a href="#" title="Logo">
        <img src="./static/img/logo/VF-nav-white.png" alt="VetsFriend's logo" />
        <img src="./static/img/logo/VF-nav-original.png" alt="VetsFriend's logo" />
      </a>
    </div>
    <div className="user-wrapper">
      <i className="fas fa-bell"></i>
    </div>
    <a href="#" className="nav-trigger"><span></span></a>
  </div>
  <div className="side-nav">
    <div className="logo">
      <a href="#" title="Logo">
        <img src="./static/img/logo/VF-icon-white.png" alt="VetsFriend's icon." />
        <img src="./static/img/logo/VF-nav-white.png" alt="VetsFriend's logo." />
      </a>
    </div>
    <nav className="nav-sidebar">
      <ul>
        <li>
          <a href="#">
            <span><i className="fas fa-paw"></i></span>
            <span>Mis amigos</span>
          </a>
        </li>
        <li className="active">
          <a href="#">
            <span><i className="fas fa-user-md"></i></span>
            <span>Perfil</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div className="main-content">
    <div className="main container">
      <div className="row">
        <div className="col-7 col-sm-7">
          <div className="main-column">
            <div className="column-header d-flex justify-content-between align-items-center">
              <h3>Tus amigos</h3>
              <button href="#" className="btn-add-pet"><i className="fas fa-plus"></i> Mascota</button>
            </div>
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="pet-img">
                  <img src="./static/img/Havanese-puppy.jpg" alt="Picture of a pet." />
                </span>
                <span className="d-inline-block">
                  <h5 id="pet-name" className="card-title pet-name">Colette</h5>
                  <h6 id="pet-id" className="card-subtitle mb-2 pet-id">ID10002050</h6>
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
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="pet-img">
                  <img src="./static/img/Havanese-puppy.jpg" alt="Picture of a pet." />
                </span>
                <span className="d-inline-block">
                  <h5 id="pet-name" className="card-title pet-name">Colette</h5>
                  <h6 id="pet-id" className="card-subtitle mb-2 pet-id">ID10002050</h6>
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
            <div className="card">
              <div className="ad-card card-body">
                ad space
              </div>
            </div>
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
                <span className="pet-img">
                  <img src="./static/img/Havanese-puppy.jpg" alt="Picture of a pet." />
                </span>
                <span className="d-inline-block">
                  <h5 id="pet-name" className="card-title pet-name">Colette</h5>
                  <h6 id="pet-id" className="mb-2 pet-id">ID10002050</h6>
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
          </div>
        </div>
        <div className="col-5 col-sm-5">
          <div className="side-column">
            <div className="side-card">
              <div className="d-flex">
                <span className="pet-img-larger">
                  <img src="./static/img/Havanese-puppy.jpg" alt="Picture of a pet." />
                </span>
              </div>
              <div className="card-body text-center p-1 pb-3">
                <div className="side-pet-name">Colette</div>
              </div>
              <div className="preview-details-wrapper">
                <div className="preview-details-title pb-1">Siguiente consulta</div>
                <div className="pl-2">
                  <span className="preview-details-text side-attendance-status">Status</span>
                </div>
                <div className="pl-2">
                  <span className="preview-details-subtitle">Fecha:</span>
                  <span className="preview-details-text">27/07/2019</span>
                </div>
                <div className="pl-2">
                  <span className="preview-details-subtitle">Hora:</span>
                  <span className="preview-details-text">11:30</span>
                </div>
              </div>
              <div className="preview-details-wrapper">
                <div className="preview-details-title pb-1">Ubicación</div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="pl-2 preview-details-text">3874 Primrose Lane Madison, WI 53718</p>
                  <a className="btn btn-outline-primary card-button" href="#" role="button">
                    <i className="fas fa-map-marker-alt"></i>
                  </a>
                </div>
              </div>
              <div className="preview-details-wrapper">
                <div className="preview-details-title pb-1">Veterinario</div>
                <div className="d-flex align-items-center">
                  <div className="vet-icon d-inline-block">
                    <img src="./static/img/vet-1.jpg" alt="Picture of a pet." />
                  </div>
                  <div className="pl-2  d-inline-block">
                    <div className="preview-details-subtitle">Andrew Brown</div>
                    <div className="preview-details-text">(801) 945-4834</div>
                  </div>
                </div>
              </div>
              <div className="side-card-button-wrapper">
                <button type="button" className="btn-ver-expediente">Ver expediente</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>                
      </Layout>
    )
  }
}