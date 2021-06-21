import React from "react";
import { Player, BigPlayButton } from "video-react";
import Arrow from "../../images/Arrow-small.png";
import Img1 from "../../images/project1.mp4";
import Img2 from "../../images/project2.png";
import Img3 from "../../images/project3.png";
import { Link } from "react-router-dom";
import "video-react/dist/video-react.css";

const Project = () => {
  return (
    <div className='project'>
      <div className='title'>
        <span>.01</span>
        <h2>SERÁ</h2>
      </div>
      <div className='container'>
        <h3>
          BRanding/web design/
          <br /> development/ecommerce
        </h3>

        <p>
          Será⏤ translating to “be” in <br /> Spanish. Será is a handcrafted,
          artisan-made,
          <br /> fine jewelry atelier. They were founded in Los <br /> Angeles,
          California, bred to be worn to <br /> capture still moments. To remind
          us to just be.
        </p>
        <ul>
          <li>
            <Link to='https://www.behance.net/gallery/114701005/Sera-jewelry-atelier?share=1'>
              behance
            </Link>
            <span>
              <img src={Arrow} alt='arrow' />
            </span>
          </li>
          <li>
            <Link to='https://sera-jewellry-atelier.myshopify.com/'>
              website
            </Link>
            <span>
              <img src={Arrow} alt='arrow' />
            </span>
          </li>
        </ul>
      </div>

      <div className='section-2'>
        <div className='showcase'>
          <Player autoPlay="true">
            <source src={Img1} />
            <BigPlayButton position='center' />
          </Player>
          <img src={Img2} alt='img' />
          <img src={Img3} alt='img' />
        </div>

        {/* <ul>
          <li>
            <h2>prev</h2>
          </li>
          <li>
            <h2>next</h2>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Project;
