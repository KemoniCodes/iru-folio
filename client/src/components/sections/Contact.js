import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../actions/useOnScreen";
import SplitText from "../utils/Split3.min";

export default function Contact() {
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
    <section className='contact' data-scroll-section rel={fav} data-scroll>
      <Link to='/contact'>
        <h1 id='c-title'>get in</h1>
        <h1 id='c-title' className='right'>
          touch
        </h1>
      </Link>
    </section>
  );
}
