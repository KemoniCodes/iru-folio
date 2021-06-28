import React, { useEffect, useRef, Link } from "react";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min";

import Mailto from "../../utils/MailTo";
import ColorChanger from "../../../images/COLOR CHANGER.png";
import Elipse from "../../../images/Ellipse 1.png";
import Letters from "../../../images/LETTERS.png";

export default function Hero() {
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

  useEffect(() => {
    const split = new SplitText("#hero-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#hero-text", {
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1.1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  useEffect(() => {
    const split = new SplitText(".contact-menu li", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText(".contact-menu li", {
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1.2,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);
  return (
    <section className='hero'  data-scroll data-scroll-section>
      <h2 id='hero-text' data-scroll>
        KEMONI IS A BRAND DESIGNER BASED IN <br /> LA.
      </h2>
      <h2 id='hero-text' className='right' data-scroll>
        CURATING <br /> AESTHETICS FOR <br />
        <span>MODERN</span> BRANDS.
      </h2>

      <div className='logo-elipse'>
        <img className='elipse' src={Elipse} alt='Dark Mode Button' />
        <img
          className='letters'
          src={Letters}
          alt='Dark Mode Button'
          ref={letters}
        />
      </div>

      <div className='contact-menu'>
        <ul>
          <li>
            <Mailto
              email='hello@irustudios.com'
              obfuscate={true}
              subject="Re: Let's work together!"
            >
              email
            </Mailto>
          </li>
          <li>
            <a href='https://www.behance.net/kemoniwilliams1' target='#'>
              behance
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/irustudios/' target='#'>
              instagram
            </a>
          </li>
          <li>
            <a href='https://github.com/KemoniCodes' target='#'>
              github
            </a>
          </li>

        </ul>
      </div>

      <img
        className='color-changer'
        src={ColorChanger}
        alt='Dark Mode Button'
      />

      <hr />
    </section>
  );
}

// const Hero = () => {
//   const letters = useRef(null);

//   useEffect(() => {
//     gsap.to(letters.current, 5, {
//       rotation: "+=360",
//       ease: "none",
//       repeat: -1,
//     });

//     gsap.from(".logo-elipse", {
//       duration: 1.1,
//       y: 80,
//       opacity: 1,
//       stagger: 0.1,
//       ease: "power2",
//     });
//   }, []);

//   useEffect(() => {
//     const split = new SplitText("#hero-text", {
//       type: "lines",
//       linesClass: "lineChildren",
//     });

//     const splitParent = new SplitText("#hero-text", {
//       linesClass: "lineParent",
//     });

//     gsap.to(split.lines, {
//       duration: 1.1,
//       y: 0,
//       opacity: 1,
//       stagger: 0.1,
//       ease: "power2",
//     });
//   }, []);

//   useEffect(() => {
//     const split = new SplitText(".contact-menu li", {
//       type: "lines",
//       linesClass: "lineChildren",
//     });

//     const splitParent = new SplitText(".contact-menu li", {
//       linesClass: "lineParent",
//     });

//     gsap.to(split.lines, {
//       duration: 1.2,
//       y: 0,
//       opacity: 1,
//       stagger: 0.1,
//       ease: "power2",
//     });
//   }, []);

//   return (
//     <section className='hero'>
//       <h2 id='hero-text' data-scroll>
//         KEMONI IS A BRAND DESIGNER BASED IN <br /> LA.
//       </h2>
//       <h2 id='hero-text' className='right' data-scroll>
//         CURATING <br /> AESTHETICS FOR <br />
//         <span>MODERN</span> BRANDS.
//       </h2>

//       <div className='logo-elipse'>
//         <img className='elipse' src={Elipse} alt='Dark Mode Button' />
//         <img
//           className='letters'
//           src={Letters}
//           alt='Dark Mode Button'
//           ref={letters}
//         />
//       </div>

//       <div className='contact-menu'>
//         <ul>
//           <li>
//             <Mailto
//               email='hello@irustudios.com'
//               obfuscate={true}
//               subject="Re: Let's work together!"
//             >
//               email
//             </Mailto>
//           </li>
//           <li>
//             <Link to='https://www.behance.net/kemoniwilliams1'>behance</Link>
//           </li>
//           <li>
//             <Link to='https://www.instagram.com/irustudios/'>instagram</Link>
//           </li>
//         </ul>
//       </div>

//       <img
//         className='color-changer'
//         src={ColorChanger}
//         alt='Dark Mode Button'
//       />

//       <hr />
//     </section>
//   );
// };

// export default Hero;
