import React from "react";
import { Link } from "react-router-dom";



const Menu = () => {
  return (
    <div className='menu'>

      <ul>
        <li>
          <Link to='/'>
            <span>.01</span>
            <h2>home</h2>
          </Link>
        </li>
        <li>
          <Link to='/works'>
            <span>.02</span>
            <h2>works</h2>
          </Link>
        </li>
        <li>
          <Link to='/services'>
            <span>.03</span>
            <h2>services</h2>
          </Link>
        </li>
        <li>
          <Link to='/about-us'>
            <span>.04</span>
            <h2>about</h2>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <span>.05</span>
            <h2>contact</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
