import React from "react";
import Mailto from "../utils/MailTo";
import { Link } from "react-router-dom";
import Services from "../sections/Services";
import ColorChanger from "../../images/COLOR CHANGER.png";
import Elipse from "../../images/Ellipse 1.png";
import Featured1 from "../../images/featured-1.png";
import Featured2 from "../../images/featured-2.png";
import Letters from "../../images/LETTERS.png";

const Home = () => {
  return (
    <div className='home'>
      <div className='hero'>
        <h2>
          KEMONI IS A BRAND DESIGNER BASED IN <br /> LA.
        </h2>
        <h2 className='right'>
          CURATING <br /> AESTHETICS FOR <br />
          <span>MODERN</span> BRANDS.
        </h2>

        <div className='logo-elipse'>
          <img className='elipse' src={Elipse} alt='Dark Mode Button' />
          <img className='letters' src={Letters} alt='Dark Mode Button' />
        </div>

        <div className='contact-menu'>
          <ul>
            <li>
              <Mailto
                email='hello@irustudios.com'
                obfuscate={true}
                subject="Re: Let's work together!"
              >
                email
              </Mailto>
            </li>
            <li>
              <Link to='https://www.behance.net/kemoniwilliams1'>behance</Link>
            </li>
            <li>
              <Link to='https://www.instagram.com/irustudios/'>instagram</Link>
            </li>
          </ul>
        </div>

        <img
          className='color-changer'
          src={ColorChanger}
          alt='Dark Mode Button'
        />

        <hr />
      </div>

      <div className='section-1'>
        <h2>
          adding a tinge of <br />
          <span>twang</span> to minimal <br /> design.
        </h2>
        <p className='right'>
          Adhering to a clean and aesthetic <br /> design style provides a sense
          of ease <br /> and usability to users. Inciting <br /> confidence in
          people’s first impression <br /> of your brand.
        </p>
        <p>
          REMOVING unessential design elements <br /> allows the focus to be on
          the most <br /> impactful aspects of your brand.
        </p>
      </div>

      <Services />

      <div className='ft-images'>
        <div className='ft-img-1'>
          <img src={Featured1} alt='Featured Project 1' />
          <h4>branding</h4>
        </div>
        <div className='ft-img-2'>
          <img src={Featured2} alt='Featured Project 2' />
          <h4>web/mobile design</h4>
        </div>
      </div>

      <div className='contact'>
        <h1>get in</h1>
        <h1 className='right'>touch</h1>
      </div>
    </div>
  );
};

export default Home;
