import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src="https://mobirise.com/assets52/images/poster.png"
              alt=""
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src="https://i.imgur.com/ConTf4t.png"
              alt=""
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src="https://static.tildacdn.com/tild6633-3833-4733-a136-323664656232/Screenshot_2021-01-1.png"
              alt=""
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src="http://www.designhill.com/design-blog/wp-content/uploads/2020/01/Inside-Blog-min.jpg"
              alt=""
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
