import React, { useEffect, useRef, useState } from "react";
import ColorChanger from "../../images/COLOR CHANGER.png";
import AboutImg from "../../images/About.png";
import MyFav from "../sections/MyFav";
import Contact from "../sections/Contact";
import Footer from "../layout/Footer";
import AOS from "aos";

import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../actions/useOnScreen";
import gsap from "gsap";
import SplitText from "../utils/Split3.min";

export const About = () => {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

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

  console.log(fav);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
      const split = new SplitText("h1", {
        type: "lines",
        linesClass: "lineChildren",
      });

      const splitParent = new SplitText("h1", {
        linesClass: "lineParent",
      });

      gsap.to(split.lines, {
        duration: 1.1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    
  }, []);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("p", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -30,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);

  console.log(reveal);
  return (
    <div className='about' data-scroll-section>
      <div className='biglogo'>
        <h1 className='left' data-scroll>
          Iru
        </h1>
        <hr ref={fav} data-scroll/>
        <h1 data-scroll className='right'>
          Studios
        </h1>
      </div>

      <img
        className='color-changer'
        src={ColorChanger}
        alt='Dark Mode Button'
      />
      <div className='about-me'>
        <p ref={ref}>
          KEMONI IS A DEVELOPER TURNED DESIGNER.
          <br /> BASED IN LOS ANGELES, CA.
        </p>
        <p ref={ref}>
          GETTING HER START IN PROGRAMMING, SHE LIKES
          <br /> TO UTILIZE BOTH HER LEFT AND RIGHT BRAIN.
          <br /> INFUSING LOGIC AND CREATIVITY, SHE HAS A<br /> MINIMALISTIC
          APPROACH TO HER WORK.
        </p>
        <p ref={ref}>
          SHE IS PASSIONATE ABOUT CREATING LOFTY
          <br />
          DIGITAL EXPERIENCES FOR HER CLIENTS.
        </p>
        <img ref={fav} src={AboutImg} alt='me me' />
      </div>
      <MyFav />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
