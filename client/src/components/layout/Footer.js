import React from "react";
import { Link } from "react-router-dom";
import Mailto from "../utils/MailTo";
import Submark from "../../images/SUBMARK.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={Submark} alt='Submark logo' />

        <div className='container'>
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
                <Link to='https://www.behance.net/kemoniwilliams1'>
                  behance
                </Link>
              </h4>
            </li>
            <li>
              <h4>
                <Link to='https://www.instagram.com/irustudios/'>
                  instagram
                </Link>
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
