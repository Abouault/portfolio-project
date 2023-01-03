import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img
              className="profile-img"
              src="https://avatars.githubusercontent.com/u/65455508?v=4"
              alt="author"
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">a propos</h1>
          <p>
            Je m'appelle Aymeric et je suis développeur web depuis plus de 2 ans. J'ai obtenu mon diplôme en informatique à la Wild Code School.

            En dehors de mon travail, j'aime rester à jour sur les dernières technologies et tendances dans le développement web.

            Je suis un développeur web passionné et motivé, et j'aime travailler en équipe pour atteindre nos objectifs communs. Si vous avez besoin de quelqu'un pour développer votre prochain site web ou application, n'hésitez pas à me contacter !
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
