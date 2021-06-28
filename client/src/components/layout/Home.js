import React, { Fragment, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import FeaturedImgs from "../sections/Home/FeaturedImgs";
import Services from "../sections/Services/Services";
import Contact from "../sections/Contact";
import Footer from "../layout/Footer";
import Navbar from "./Navbar";
import useLocoScroll from "../../actions/useLocoScroll";
import gsap from "gsap";
import SplitText from "../utils/Split3.min.js";
import Hero from "../sections/Home/Hero";
import About from "../sections/Home/About";

const Home = () => {
  const [preLoader, setPreloader] = useState(true);

  useLocoScroll(!preLoader);

  const [timer, setTimer] = useState(1);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <Fragment>
      {preLoader ? (
        <div className='loader-wrapper'>
          <div className='biglogo'>
            <h1 className='left'>Iru</h1>
            <hr />
            <h1 className='right'>Studios</h1>
          </div>
        </div>
      ) : (
        <div className='home' id='main-container' data-scroll-container>
          <Hero />
          <About />
          <Services />
          <FeaturedImgs />
           <Contact />
          <Footer />   
        </div>
      )}
    </Fragment>
  );
};

export default Home;
