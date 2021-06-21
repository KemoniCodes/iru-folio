import React from "react";
import { Link } from "react-router-dom";

const ServicesInfo = () => {
  return (
    <div className='services-info'>
      <ul>
        <li>
          <Link to='/project'>
            <span>.01</span>
            <h2>
              bran
              <br />
              /ding
            </h2>
          </Link>
        </li>
        <li>
          <Link to='/project'>
            <span>.02</span>
            <h2>
              web
              <br />
              /desi
              <br />
              gn
            </h2>
          </Link>
        </li>
        <li>
          <Link to='/project'>
            <span>.03</span>
            <h2>
              deve
              <br />
              /lop
              <br />
              ment
            </h2>
          </Link>
        </li>
      </ul>
      <hr />

      <p></p>
      <p></p>
      <p></p>

      <h3></h3>
      <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
    </div>
  );
};

export default ServicesInfo;
