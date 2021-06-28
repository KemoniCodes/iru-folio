import React, {useEffect, useRef} from "react";
import { Player, BigPlayButton } from "video-react";
import Arrow from "../../images/Arrow-small.png";
import Img1 from "../../images/project1.mp4";
import Img2 from "../../images/project2.png";
import Img3 from "../../images/project3.png";
import { Link } from "react-router-dom";
import "video-react/dist/video-react.css";
import Footer from "../layout/Footer";

import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";


const Project = () => {

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

  console.log(fav)
  return (
    <div className='project' data-scroll-section>
      <div className='title' data-scroll ref={fav}>
        <span>.01</span>
        <h2>SERÁ</h2>
      </div>
      <div className='container' data-scroll ref={fav}>
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

      <div className='section-2' ref={fav}>
        <div className='showcase' >
          <Player autoPlay='true' >
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
      <Footer />
    </div>
  );
};

export default Project;
