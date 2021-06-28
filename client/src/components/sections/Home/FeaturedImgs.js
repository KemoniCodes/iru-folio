import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Featured1 from "../../../images/featured-1.png";
import Featured2 from "../../../images/featured-2.png";

export default function Hero() {
  return (
    <section className='ft-images' data-scroll-section>
      <div className='ft-img-1'>
        <Link to='/works/project'>
          <img src={Featured1} alt='Featured Project 1' data-scroll />
        </Link>
        <h4>branding</h4>
      </div>
      <div className='ft-img-2'>
        <Link to='/works/project'>
          <img src={Featured2} alt='Featured Project 2' data-scroll />
        </Link>
        <h4>web/mobile design</h4>
      </div>
    </section>
  );
}
