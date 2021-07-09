import React from "react";
import SectionTitle from "../components/SectionTitle";

const About = () => {
  return (
    <section className="Mzn-section" id="about">
      <div className="Mzn-container">
        <div className="Mzn-about">
          <div className="Mzn-about__left">
            <SectionTitle heading="ABOUT" subHeading="A little bit about me" />
            <p className="Mzn-about__text">
              I am a self-taught front-end engineer based on modern technology
              like (react.js, angular.js, vue.js, svelte.js, etc.). I have also
              good knowledge on backend technology like node.js, express.js,
              mongodb, php, laravel, mysql etc.
            </p>
            <p className="Mzn-about__text">
              I have very good knowledge of making and consuming RESTful API.
            </p>
            <p className="Mzn-about__text">
              I can learn new technology quickly by following documentation and
              can solve problems by googling. I love team working very much.
              Taking challenges and solving problems is one of my passion.
            </p>
            <p>
              I can complete projects by deedline. I can also take pressure and
              able to handle any type of client.
            </p>
          </div>
          <div className="Mzn-about__right">
            <img src="./images/about2.webp" alt="about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
