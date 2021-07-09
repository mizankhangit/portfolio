import React from "react";
import SectionTitle from "../components/SectionTitle";

const Skills = () => {
  return (
    <section className="Mzn-section" id="skills">
      <div className="Mzn-container">
        <div className="Mzn-skill">
          <div className="Mzn-skill__left">
            <SectionTitle
              heading="SKILLS"
              subHeading="As far as what I learn"
            />
            <ul className="Mzn-skill__steps">
              <li className="Mzn-skill__step">
                <div className="Mzn-skill__cat">
                  <p>Expert Level</p>
                </div>
                <ul className="Mzn-skill__lists">
                  <li className="Mzn-skill__list">HTML5</li>
                  <li className="Mzn-skill__list">CSS3(SASS)</li>
                  <li className="Mzn-skill__list">React(Redux)</li>
                  <li className="Mzn-skill__list">JavaScript(Modern)</li>
                </ul>
              </li>
              <li className="Mzn-skill__step">
                <div className="Mzn-skill__cat">
                  <p>Good Knowledge</p>
                </div>
                <ul className="Mzn-skill__lists">
                  <li className="Mzn-skill__list">TypeScript</li>
                  <li className="Mzn-skill__list">Node.js</li>
                  <li className="Mzn-skill__list">Express.js</li>
                  <li className="Mzn-skill__list">MongoDB</li>
                  <li className="Mzn-skill__list">Next.js</li>
                  <li className="Mzn-skill__list">Vue.js</li>
                  <li className="Mzn-skill__list">React Native</li>
                  <li className="Mzn-skill__list">Bootstrap</li>
                </ul>
              </li>
              <li className="Mzn-skill__step">
                <div className="Mzn-skill__cat">
                  <p>Moderate Knowledge</p>
                </div>
                <ul className="Mzn-skill__lists">
                  <li className="Mzn-skill__list">PHP</li>
                  <li className="Mzn-skill__list">WordPress</li>
                  <li className="Mzn-skill__list">MySQL</li>
                  <li className="Mzn-skill__list">Shopify</li>
                  <li className="Mzn-skill__list">Gatsby.js</li>
                  <li className="Mzn-skill__list">Angular.js</li>
                  <li className="Mzn-skill__list">jQuery</li>
                  <li className="Mzn-skill__list">Svelte.js</li>
                  <li className="Mzn-skill__list">Material UI</li>
                  <li className="Mzn-skill__list">Ant Design</li>
                  <li className="Mzn-skill__list">Cypress</li>
                  <li className="Mzn-skill__list">
                    Data Structure and Algorithm
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="Mzn-skill__right">
            <img src="./images/skill2-tr.webp" alt="skill" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
