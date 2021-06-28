import React, { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const MyFav = () => {
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

  return (
    <div className='myFav' ref={fav}>
      <h2 ref={fav}>my fav/ music</h2>
      <div ref={fav} className='one'>
        <p>homeshake,</p>
        <p>ariel pink,</p>
        <p>daft punk,</p>
        <p>
          mild
          <br /> high club,
        </p>
        <p>mac demarco,</p>
        <p>
          tame impala,
          <br />
        </p>
        <p>arctic monkeys,</p>
        <p>jerry paper,</p>
        <p>
          beach
          <br /> house,
        </p>
        <p>king krule</p>
      </div>

      <h2 ref={fav}>my fav/ movies</h2>
      <div ref={fav} className='two'>
        <p>
          a clockwork orange
          <br /> (1971),
        </p>
        <p>trainspotting (1996),</p>
        <p>
          american
          <br /> beauty (1999),
        </p>
        <p>
          in the mood for love
          <br /> (2000),
        </p>
        <p>donnie darko (2001),</p>
        <p>
          rush hour
          <br /> 2/3 (2001/2007),
        </p>
        <p>lost in translation (2003)</p>
      </div>

      <h2 ref={fav}>my fav/ podca sts</h2>
      <div ref={fav} className='three'>
        <p>BAD FRIENDS,</p>
        <p>TIGERBELLY,</p>
        <p>HEY BABE,</p>
        <p>
          YOUR MOMS
          <br />
          HOUSE,
        </p>
        <p>JRE,</p>
        <p>
          CONGRATULATIONS,
          <br />
        </p>
        <p>SYNTAX,</p>
        <p>THE FUTUR</p>
      </div>
    </div>
  );
};

export default MyFav;
