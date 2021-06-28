import React, { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../../images/Arrow.png";
import Arrow2 from "../../../images/Arrow2.png";
import ServicesMenu from "../Services/ServicesMenu";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getServices } from "../../../actions/service";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../../actions/useOnScreen";
import SplitText from "../../utils/Split3.min";

const Services = ({ getServices, service: { services, loading } }) => {
  useEffect(() => {
    getServices();
  }, [getServices]);

  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (ScrollTrigger) {
      setTimeout(() => {
        console.log(ref.current.offsetWidth);
        console.log(ref.current.clientWidth);
        console.log({ current: ref.current });

        gsap.registerPlugin(ScrollTrigger);
        const sections = gsap.utils.toArray(".headers");
        console.log(sections);

        gsap.to(sections, {
          xPercent: -100,
          ease: "none",
          scrollTrigger: {
            start: "top top",
            trigger: ref.current,
            scroller: "#main-container",
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            end: () => `+=${ref.current.offsetWidth}`,
          },
        });
        ScrollTrigger.refresh();
      });
    }
  }, []);

  return (loading && ScrollTrigger === true) || null ? (
    <h2>Loading...</h2>
  ) : (
    <Fragment>
      <div className='section-2' data-scroll-section>
        <div className='header' ref={ref}>
          <h1 className='headers'>Services</h1>
          <h1 className='headers'>Services</h1>
          <h1 className='headers'>Services</h1>
        </div>
        <div className='services-menu'>
          {services.length > 0 ? (
            services.map((service) => {
              return <ServicesMenu key={service._id} service={service} />;
            })
          ) : (
            <h4>No services listed</h4>
          )}

          <Link to='/services'>
            <img src={Arrow} alt='arrow' />
            <img className='hover' src={Arrow2} alt='arrow' />
          </Link>
        </div>
      </div>
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
