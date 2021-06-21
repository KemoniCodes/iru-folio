import React from "react";
import ColorChanger from "../../images/COLOR CHANGER.png";
import Letters from "../../images/LETTERS1.png";
import Circle from "../../images/COLOR CHANGER.png";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className='works'>
      <div className='section-1'>
        <ul>
          <li>
            <Link to='/project'>
              <span>.01</span>
              <h2>SERÁ</h2>
            </Link>
          </li>
        </ul>

        <div className='scroll'>
          <img className='elipse' src={Circle} alt='' />
          <img className='letters' src={Letters} alt='' />
        </div>

        <img
          className='color-changer'
          src={ColorChanger}
          alt='Dark Mode Button'
        />
      </div>
    </div>
  );
};

export default Works;
