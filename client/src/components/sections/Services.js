import React from "react";
import { Link } from "react-router-dom";
import Arrow from "../../images/Arrow.png";
import Arrow2 from "../../images/Arrow2.png";

const Services = () => {
  return (
    <div className='section-2'>
      <div className='header'>
        <h1>Services</h1>
        <h1>Services</h1>
      </div>

      <ul>
        <li>
          <Link to='/'>
            <span>.01</span>
            <h2>branding</h2>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <span>.02</span>
            <h2>web design</h2>
          </Link>
        </li>

        <li>
          <Link to='/'>
            <span>.03</span>
            <h2>development</h2>
          </Link>
          <Link to='/'>
            <img src={Arrow} alt='arrow' />
            <img className='hover' src={Arrow2} alt='arrow' />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Services;
