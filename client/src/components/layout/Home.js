import React from "react";
import Mailto from "../utils/MailTo";
import { Link } from "react-router-dom";
import ColorChanger from "../../images/COLOR CHANGER.png";
import Elipse from "../../images/Ellipse 1.png";
import Letters from "../../images/LETTERS.png";

const Home = () => {
  return (
    <div className='home'>
      <h2>KEMONI IS A BRAND DESIGNER BASED IN LA.</h2>
      <h2 className='left'>
        CURATING AESTHETICS FOR <span>MODERN</span>
        BRANDS.
      </h2>

      <div className='logo-elipse'>
        <img className='elipse' src={Elipse} alt='Dark Mode Button' />
        <img className='letters' src={Letters} alt='Dark Mode Button' />
      </div>

      <div className='contact-menu'>
        <ul>
          <Mailto
            email='hello@irustudios.com'
            obfuscate={true}
            subject="Re: Let's work together!"
          >
            <li>email</li>
          </Mailto>

          <Link to='https://www.behance.net/kemoniwilliams1'>
            <li>behance</li>
          </Link>
          <Link to='https://www.instagram.com/irustudios/'>
            <li>instagram</li>
          </Link>
        </ul>
      </div>

      <img
        className='color-changer'
        src={ColorChanger}
        alt='Dark Mode Button'
      />

      <hr />
    </div>
  );
};

export default Home;
