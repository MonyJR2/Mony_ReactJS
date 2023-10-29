import React, { useState } from 'react';
import '../Header/bar.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import { Body } from '../Body/Body';

export const Bar = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`bar-head ${toggle ? 'active' : ''}`}>
      <div>Logo</div>
      <span onClick={handleToggle} className="bar-span">
        <FaBars />
      </span>

      <nav className="nav-item">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Service">Service</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </nav>

      <div className='search'>
        <input type='search' />
        <label>Search</label>
      </div>
    </div>
  );
};
