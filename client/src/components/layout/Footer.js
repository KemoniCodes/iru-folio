import React, { useEffect, useRef, Link } from "react";
import gsap from "gsap";
import Mailto from "../utils/MailTo";
import Elipse from "../../images/Ellipse 1.png";
import Letters from "../../images/LETTERS.png";
import Resume from "../../images/Resume21.pdf";

const Footer = () => {
  const letters = useRef(null);

  useEffect(() => {
    gsap.to(letters.current, 5, {
      rotation: "+=360",
      ease: "none",
      repeat: -1,
    });

    gsap.from(".logo-elipse", {
      duration: 1.1,
      y: 80,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);
  return (
    <footer data-scroll-section>
      <div>
        <div className='logo-elipse submark'>
          <img className='elipse' src={Elipse} alt='Dark Mode Button' />
          <img
            className='letters'
            src={Letters}
            alt='Dark Mode Button'
            ref={letters}
          />
        </div>
        <div className='footer-container'>
          <ul>
            <li className='header'>
              <h3>socials</h3>
            </li>
            <li>
              <h4>
                <Mailto
                  email='hello@irustudios.com'
                  obfuscate={true}
                  subject="Re: Let's work together!"
                >
                  email
                </Mailto>
              </h4>
            </li>
            <li>
              <h4>
                <a href='https://www.behance.net/kemoniwilliams1' target='#'>
                  behance
                </a>
              </h4>
            </li>
            <li>
              <h4>
                <a href='https://www.instagram.com/irustudios/' target='#'>
                  instagram
                </a>
              </h4>
            </li>
            <li>
              <h4>
                <a href='https://github.com/KemoniCodes' target='#'>
                  github
                </a>
              </h4>
            </li>
            <li>
              <h4>
                <a href={Resume} target='#'>
                  resume
                </a>
              </h4>
            </li>
          </ul>

          <ul>
            <li className='header'>
              <h3>contact</h3>
            </li>
            <li>
              <h4>
                <Mailto
                  email='hello@irustudios.com'
                  obfuscate={true}
                  subject="Re: Let's work together!"
                >
                  hello@irustudios.com
                </Mailto>
              </h4>
            </li>
            <li>
              <h4>
                mon-friday
                <br />
                9am-5pm pst
              </h4>
            </li>
          </ul>
        </div>
      </div>

      <div className='copyright'>
        <h4>iru studios</h4>
        <h4>© 2021</h4>
      </div>
    </footer>
  );
};

export default Footer;
