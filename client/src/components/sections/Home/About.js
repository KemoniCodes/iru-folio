import React, { useEffect, useRef, useState } from "react";
import useLocoScroll from "../../../actions/useLocoScroll";
import LocomotiveScroll from "locomotive-scroll";
import useOnScreen from "../../../actions/useOnScreen";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";

export default function About() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#about-text", {
        type: "lines",
        linesClass: "lineChildren",
      });

      const splitParent = new SplitText("#about-text", {
        linesClass: "lineParent",
      });

      gsap.to(split.lines, {
        duration: 1.1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("p", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -40,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal]);

  console.log(reveal);

  return (
    <section id='section-1' data-scroll-section>
      <h2 id='about-text' data-scroll>
        adding a tinge of <br />
        <span>twang</span> to minimal <br /> design.
      </h2>
      <p id='right' data-scroll ref={ref}>
        Adhering to a clean and aesthetic <br /> design style provides a sense
        of ease <br /> and usability to users. Inciting <br /> confidence in
        people’s first impression <br /> of your brand.
      </p>
      <p data-scroll ref={ref}>
        REMOVING unessential design elements <br /> allows the focus to be on
        the most <br /> impactful aspects of your brand.
      </p>
    </section>
  );
}
