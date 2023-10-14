import React from "react";
import SectionTitle from "../components/SectionTitle";

const data = [
  {
    id: 1,
    title: "Expert Level",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux.js(RTK Query)",
      "PHP",
      "Laravel",
      "Node.js",
      "Express.js",
      "Nest.js",
      "PostgreSQL",
      "MySQL",
      "Mongodb",
      "Tailwind CSS",
      "Ant Design",
      "Material UI",
      "Bootstrap",
      "React Bootstrap",
    ],
  },
  {
    id: 2,
    title: "Good Knowledge",
    skills: [
      "Vue.js",
      "Svelte.js",
      "Angular.js",
      "jQuery",
      "Git and GitHub",
      "Docker",
      "Jest",
      "Figma",
      "Photoshop",
      "Illustrator",
      "WordPress",
      "Shopify",
      "Gatsby.js",
      "Semantic UI",
      "Data Structure and Algorithm",
    ],
  },
];

const Skills = () => {
  return (
    <section className="Mzn-section" id="skills">
      <div className="Mzn-container">
        <div className="Mzn-skill">
          <div className="Mzn-skill__left">
            <SectionTitle
              heading="SKILLS"
              subHeading="As far as what I learned"
            />
            <ul className="Mzn-skill__steps">
              {data?.map((item, i) => {
                return (
                  <li className="Mzn-skill__step" key={i}>
                    <div className="Mzn-skill__cat">
                      <p>{item?.title}</p>
                    </div>
                    <ul className="Mzn-skill__lists">
                      {item?.skills?.map((sk, i) => {
                        return (
                          <li className="Mzn-skill__list" key={i}>
                            {sk}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
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
