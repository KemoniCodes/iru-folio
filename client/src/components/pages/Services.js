import React, { Fragment, useEffect, useState, useRef } from "react";
import ServicesMinMenu from "../sections/Services/ServicesMinMenu";
import ColorChanger from "../../images/COLOR CHANGER.png";
import Contact from "../sections/Contact";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getServices } from "../../actions/service";
import Footer from "../layout/Footer";

import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../actions/useOnScreen";
import gsap from "gsap";
import SplitText from "../utils/Split3.min";


const Services = ({
  getServices,
  getServicesbyID,
  service: { services, loading, service, _id },
  match,
}) => {
  useEffect(() => {
    getServices();
  }, [getServices]);
  

  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {

    const split = new SplitText("#service-title", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#service-title", {
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1.1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
},);

useEffect(() => {
    const split = new SplitText("#service-p", { type: "lines" });

    gsap.to(split.lines, {
      duration: 1,
      y: -30,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  
}, []);

console.log(reveal)

  return loading === true || null  ? (
    <h2>Loading...</h2>
  ) : (
    <Fragment>
      <div className='services' data-scroll-section data-scroll>
        <div className='section-1'>
          <h2 id="service-title"data-scroll>
            TWANGY  MINIMALIST
            <br /> <span>DESIGN</span>
            <br /> FOR  MODERN
            <br /> <span>BRANDS.</span>
          </h2>

          <img
            className='color-changer'
            src={ColorChanger}
            alt='Dark Mode Button'
          />

          <p data-scroll id="service-p">
            AT IRU, our goal iS TO COMBINE MINIMALISM AND <br /> PERSONAL
            AESTHETICS TO ACHIEVE YOUR BUSINESS’
            <br /> GOALS.
            <br /> <br />
            CLEAN AND ATMOSPHERIC DESIGN BREEDS <br /> FUNCTIONALITY. ALLOWING
            YOUR BRAND TO ATTAIN
            <br />
            ITS IDEAL FINAL RESULTS. IRU’S MOST IMPORTANT <br /> MISSION IS TO
            UNDERSTAND CLIENT’S PROBLEMS AND
            <br /> OFFER A PRECISE RESOLUTION.
          </p>

          <hr />
        </div>
        <div className='services-info'>
          <ul>
            {services.length > 0 ? (
              services.map((service) => {
                return loading === true || null ? (
                  <h2>Loading...</h2>
                ) : (
                  <Fragment key={service._id}>
                    <ServicesMinMenu service={service} />
                  </Fragment>
                );
              })
            ) : (
              <h4>No services listed</h4>
            )}
          </ul>
          <hr />
        </div>
        <hr />
      </div>
      <Contact /> 
      <Footer/>
    </Fragment>
  );
};

Services.propTypes = {
  getServices: PropTypes.func.isRequired,
  service: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  service: state.service,
});

export default connect(mapStateToProps, { getServices })(Services);
