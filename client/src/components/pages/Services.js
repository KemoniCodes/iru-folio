import React from "react";
import Info from "../sections/ServicesInfo";

const Services = () => {
  return (
    <div className='services'>
      <div className='section-1'>
        <h2>
          TWANGY MINIMALIST
          <br /> <span>DESIGN</span>
          <br /> FOR MODERN
          <br /> <span>BRANDS.</span>
        </h2>

        <p>
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

      <Info />
    </div>
  );
};

export default Services;
