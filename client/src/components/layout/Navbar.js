import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/LOGO.png";
import { slide as Menu } from 'react-burger-menu'




const Navbar = () => {

  return (
    
<>
    <nav>
      <ul>
        <li className='nav-link'>
          <Link to='/menu'>menu</Link>
        </li>
        <li className='nav-link'>
          <Link to='/'>
            <img src={Logo} alt='Iru Studios Logo' />
          </Link>
        </li>
        <li className='nav-link'>
          <Link className='nav-link' to='/contact'>
            contact
          </Link>
        </li>
      </ul>
    </nav>

    </>


  );
};

export default Navbar;
