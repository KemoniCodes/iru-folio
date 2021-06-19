import React from 'react'
import Logo from '../../images/LOGO.png'

const Navbar = () => {
    return (
        <nav>
            <ul>
              <li className="nav-link">menu</li>
              <li className="nav-link"><img src={Logo} /></li>
              <li className="nav-link">contact</li>
            </ul>
        </nav>
    )
}

export default Navbar

