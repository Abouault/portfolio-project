import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { BsWordpress } from 'react-icons/bs';
import { MdDesignServices } from 'react-icons/md';
import { DiCss3 } from 'react-icons/di';

const listStyle = {
  listStyleType: "none"
}

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Mes services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Développement Web</h3>
              <ul style={listStyle}>
                <li>HTML, CSS</li>
                <li>Javascript</li>
                <li>Framework et bibliothèque Web</li>
                <li>Méthodologie de developpement agile</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <BsWordpress className="icon" size={30} />
              </div>
              <h3>Wordpress</h3>
              <ul style={listStyle}>
                <li>Installation de thèmes/plugins</li>
                <li>Developpement de site Web Worpress</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <DiCss3 className="icon" size={30} />
              </div>
              <h3>Intégration Web</h3>
              <ul style={listStyle}>
                <li>Librairie CSS</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <MdDesignServices className="icon" size={30} />
              </div>
              <h3>Web Design</h3>
              <ul style={listStyle}>
                <li>Adobe Illustrator / photoshop</li>
                <li>Maquettage Web</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
