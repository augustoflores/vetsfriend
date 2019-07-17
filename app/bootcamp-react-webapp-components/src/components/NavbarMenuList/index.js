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
   </ul>
  )
}

export default NavbarMenuList;
