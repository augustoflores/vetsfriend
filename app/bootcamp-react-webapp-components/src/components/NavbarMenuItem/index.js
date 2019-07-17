import React from 'react'
import {Link} from 'react-router-dom'

const MenuItem = ({ text, href, active,icon }) => (
  <li className={`nav-item ${active ? 'active' : ''}`}>


    <Link
      className="nav-link"
      to={href}
    >
      <span><i className={`fas ${icon}`}></i></span>
            <span>{ text }</span>

    </Link>
  </li>
);

export default MenuItem;
