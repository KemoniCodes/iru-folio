import React, {useRef, useEffect} from "react";
import ColorChanger from "../../images/COLOR CHANGER.png";
import Letters from "../../images/LETTERS1.png";
import Circle from "../../images/COLOR CHANGER.png";
import { Link, Route } from "react-router-dom";
import Project from "./Project";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



const Works = () => {

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

  const fav = useRef(null);

  useEffect(() => {
    const anim = gsap.fromTo(
      fav.current,
      { autoAlpha: 0, y: 100 },
      { duration: 1, autoAlpha: 1, y: 0 }
    );
    ScrollTrigger.create({
      trigger: fav.current,
      animation: anim,
      toggleActions: "play none none none",
      once: true,
    });
  }, [ScrollTrigger]);
  return (
    <div className='works' data-scroll-section>
      <div className='section-1'>
        <ul>
          <li ref={fav}>
            <Link to='/works/project'>
              <span>.01</span>
              <h2>SERÁ</h2>
            </Link>
          </li>
        </ul>

        <div className='scroll'>
          <img className='elipse' src={Circle} alt='' />
          <img className='letters' ref={letters} src={Letters} alt='' />
        </div>

        <img
          className='color-changer'
          src={ColorChanger}
          alt='Dark Mode Button'
        />
      </div>
      <Route path='/works/project' component={Project} />
    </div>
  );
};

export default Works;
