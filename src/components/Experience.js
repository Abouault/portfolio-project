import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experiences</h1>
      </div>
      <div className="container experience-wrapper">
        {/* 1 */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>sept. 2020 - fevr. 2021</h3>

            <h4>Développeur WordPress - indépendant</h4>
            <p>
              Création de 2 sites en WordPress : <br />
              - Site CEE Santé & Management pour des consultants indépendants<br />
              - Site Karuma pour un studio d'enregistrement
            </p>
            <p>
              Formations autodidactes sur la suite Adobe :<br />
              - Illustrator (logos, bannières)<br />
              - Adobe XD (maquettes web)<br />
              - PhotoShop (retouches photos)
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>fevr. 2021 - avr. 2022</h3>
            <h4>Développeur Web Front-end - Association Hozana</h4>
            <p>
              Développement et maintenance du site Web Hozana. <br />
              - Développement de nouvelles fonctionnalités. <br />
              - Maintenance de site => SEO, résolution de bug, écriture de test, amélioration du code.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>sept. 2020 - févr. 2021</h3>
            <h4>Developpeur Web et Web mobile - Wild Code School</h4>
            <p>
              Apprentissage du développement de sites internet interactifs qui utilisent les technologies  HTML, CSS et JavaScript.<br />
              La réalisation de plusieurs projets professionnels, maîtrise des langages informatiques et Frameworks suivants : React/NodeJS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
