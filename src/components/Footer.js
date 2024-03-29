import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 block">
            <div className="d-flex">
              <p>6 rue camille desmoulins 69007</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">06 64 75 46 18</a>
            </div>
            <div className="d-flex">
              <p>aymeric.bouault@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6 block">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Accueil</a>
                <br />
                <a className="footer-nav">A propos</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experiences</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contact</a>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-2 col-sm-6 align-items-center block">
            <div className="d-flex justify-content-center">
              <FacebookShareButton url={""}>
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <LinkedinShareButton url={""}>
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <TwitterShareButton url={""}>
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy
              {new Date().getFullYear()}&nbsp;Bouault Aymeric | Tous droits
              réservés
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
