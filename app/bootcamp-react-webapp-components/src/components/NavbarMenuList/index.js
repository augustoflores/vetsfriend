import React from 'react';

import NavbarMenuItem from '../NavbarMenuItem';
import NavbarMenuDropdown from '../NavbarMenuDropdown';

function NavbarMenuList({ list }) {
  const options = list.map((option, index) => (
    !Array.isArray(option.options) ? <NavbarMenuItem {...option} key={index}/> : <NavbarMenuDropdown {...option} key={index}/>
  ));

  return (
    <ul>
      { options }
      <li>
      <a className="nav-link" target="_blank" href="https://stt-vets.mybluemix.net/">
        <span><i className="fas fa-microphone-alt"></i></span>
        <span>STT</span>
      </a>
      </li>
    </ul>
  )
}

export default NavbarMenuList;
