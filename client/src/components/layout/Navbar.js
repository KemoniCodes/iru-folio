import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/LOGO.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className='nav-link'>menu</li>
        <li className='nav-link'>
          <Link to='/'>
            <img src={Logo} alt='Iru Studios Logo' />
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='/'>contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
