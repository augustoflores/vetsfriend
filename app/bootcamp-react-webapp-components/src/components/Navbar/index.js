import React, { useState } from 'react';


//vet
//owner
//add pet
//login
//registro

import SearchInput from '../SearchInput';
import NavbarMenuList from '../NavbarMenuList';

  const INITIAL_MENU =  [
    { text: 'Mis amigos', href: '/owner', icon:'fa-paw'},
    { text: 'Veterinarios', href: '/vet', icon:'fa-user-md' },
    { text: 'QR', href: '/qr', icon:'fa-qrcode' },

  ];

function Navbar (){
  const [state] = useState(INITIAL_MENU)

  return(
    <div>
      <div className="header">
        <div className="logo">
          <a href="#" title="Logo">
            <img src="/img/logo/VF-nav-white.png" alt="VetsFriend's logo" />
            <img src="/img/logo/VF-nav-original.png" alt="VetsFriend's logo" />
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
        <img src="/img/logo/VF-icon-white.png" alt="VetsFriend's icon." />
        <img src="/img/logo/VF-nav-white.png" alt="VetsFriend's logo." />
      </a>
    </div>
    <nav className="nav-sidebar">
      <ul>
       <NavbarMenuList list={state} />
      </ul>
    </nav>
    </div>
</div>
  )
}

export default Navbar;




