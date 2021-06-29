import React, { useEffect, useRef, Link } from "react";
import gsap from "gsap";
import SplitText from "../utils/Split3.min";

import Img from "../../images/11.jpeg";
import Elipse from "../../images/Ellipse 1.png";
import Letters from "../../images/LETTERS.png";

const Instagram = () => {
  const letters = useRef(null);

  useEffect(() => {
    gsap.to(letters.current, 5, {
      rotation: "+=360",
      ease: "none",
      repeat: -1,
    });

    gsap.from(".logo-elipse", {
      duration: 1.1,
      y: 80,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);
  return (
    <div className='instagram'>
      <img src={Img} alt='ig links' className='header-img' />

      <div className='logo-elipse'>
        <img className='elipse' src={Elipse} alt='Dark Mode Button' />
        <img
          className='letters'
          src={Letters}
          alt='Dark Mode Button'
          ref={letters}
        />
      </div>

      <ul>
        <li>
          <a href='/contact'>
            <h2>work with the studio</h2>
          </a>
        </li>
        <li>
          <a href='/services'>
            <h2>what do we do?</h2>
          </a>
        </li>
        <li>
          <a href='/about-us'>
            <h2>learn about the founder</h2>
          </a>
        </li>
        <li>
          <a
            href='https://www.etsy.com/listing/1021540305/minimal-shopify-theme-template-minimal?ref=shop_home_active_2'
            target='#'
          >
            <h2>buy my premium shopify theme</h2>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Instagram;
