import React from "react";
import SectionTitle from "../components/SectionTitle";

const data = [
  {
    id: 2,
    description:
      "As a Senior Frontend Engineer with a strong knowledge of consuming RESTful and GraphQL APIs, I have a unique set of skills that allow me to create high-quality and efficient web applications. I have a passion for staying up-to-date with the latest industry trends and technologies, and I am a quick learner who can adapt to changing project requirements.",
  },
  {
    id: 3,
    description:
      "I have the ability to collaborate effectively with frontend, backend developers and other stakeholders to achieve project goals. I understand the importance of working closely with the team to ensure that the application meets the needs of the end-users, and I am always willing to provide feedback and suggestions to improve the overall quality of the application.",
  },
  {
    id: 4,
    description:
      "I am able to adapt to changing project requirements and implement new features quickly and efficiently. I understand the importance of continuously learning and improving my skills, and I am always seeking out new challenges and opportunities to grow as a developer.",
  },
];

const About = () => {
  return (
    <section className="Mzn-section" id="about">
      <div className="Mzn-container">
        <div className="Mzn-about">
          <div className="Mzn-about__left">
            <SectionTitle heading="ABOUT" subHeading="A little bit about me" />

            {data?.map((item, i) => {
              return (
                <p key={i} className="Mzn-about__text">
                  {item?.description}
                </p>
              );
            })}
          </div>
          <div className="Mzn-about__right">
            <img
              src="./images/feature4.webp"
              alt="about"
              style={{ borderRadius: 8 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
