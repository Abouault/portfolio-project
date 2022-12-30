import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Développement Web et Web design</h1>
        <Typed
          className="typed-text"
          strings={["Développement Web","Worpress", "Integration Web","Web Design"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link to="contact" href="#" className="btn-main-offer">
          contactez moi
        </Link>
      </div>
    </div>
  );
};

export default Header;
