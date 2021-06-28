import React, { useEffect } from "react";
import contact from "../../images/contact.jpeg";
import Footer from "../layout/Footer";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = (function (h, b, s, n, i, p, e, t) {
      h._HB_ = h._HB_ || {};
      h._HB_.pid = i;
      t = b.createElement(s);
      t.type = "text/javascript";
      t.async = !0;
      t.src = n;
      e = b.getElementsByTagName(s)[0];
      e.parentNode.insertBefore(t, e);
    })(
      window,
      document,
      "script",
      "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js",
      "5fb85402902329000db6b393"
    );
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className='contact-page'>
      <img src={contact} alt='contact' className="contact-img"/>
      <h2>contact us</h2>
      <div className='hb-p-5fb85402902329000db6b393-1'></div>
      <Footer />
    </div>
  );
};

export default Contact;
