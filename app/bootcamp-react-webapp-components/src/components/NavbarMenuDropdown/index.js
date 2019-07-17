import React, { useState } from 'react';

function NavbarMenuDropdown(props) {
  const [state,setState] = useState(false)
  const { options = [], text, id } = props;
  const items = options.map(({ text, href }, index) => (

    <a
        className="dropdown-item"
        href={href}
        key={index}
      >
        { text }
      </a>
    ));

    return (
      <li className="nav-item dropdown">
        <span
          id={id}
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          role="button"
          onClick={()=>setState(!state)}
        >
          { text }
        </span>
        <div
          className={`dropdown-menu ${state? 'show' : ''}`}
          aria-labelledby={id}
        >
          { items }
        </div>
      </li>
    );
}

export default NavbarMenuDropdown;
