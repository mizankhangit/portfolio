import React from "react";
import CheckIcon from "../components/icons";
import SectionTitle from "../components/SectionTitle";

const data = [
  {
    id: 1,
    description:
      "One of my greatest strengths as a frontend engineer is my ability to collaborate effectively with designers, developers, and stakeholders to achieve project goals and deliver high-quality products.",
  },
  {
    id: 2,
    description:
      "With my expertise in HTML, CSS, JavaScript, and various frontend frameworks such as React, Vue, and Angular, I am able to turn complex ideas into intuitive and user-friendly interfaces.",
  },
  {
    id: 3,
    description:
      "As a frontend engineer, I have a keen eye for detail and a passion for optimizing performance, ensuring that my code is always efficient and scalable.",
  },
  {
    id: 4,
    description:
      "Through my experience in designing and developing responsive and accessible web applications, I have learned the importance of incorporating best practices in UX/UI design to enhance the user's journey and increase engagement.",
  },
  {
    id: 5,
    description:
      "As a frontend engineer, I have a strong passion for creating visually stunning and interactive web applications that provide users with a seamless and enjoyable experience.",
  },

  {
    id: 7,
    description:
      "I am constantly staying up to date with the latest technologies and trends in frontend development, allowing me to provide innovative solutions to various challenges in the industry.",
  },
  {
    id: 8,
    description:
      "My dedication to continuous learning and improvement has enabled me to tackle complex problems with confidence, and has helped me to establish myself as a trusted and reliable frontend engineer in the industry.",
  },
  {
    id: 8,
    description:
      "I am excited about the future of frontend development and the role it plays in shaping the digital landscape, and I look forward to contributing my skills and expertise to create innovative and impactful web applications.",
  },
];

const Features = () => {
  return (
    <section className="Mzn-section" id="features">
      <div className="Mzn-container">
        <div className="Mzn-feature">
          <SectionTitle heading="FEATURES" subHeading="My key features" />
          <ul className="Mzn-feature__lists">
            {data?.map((item, i) => {
              return (
                <li className="Mzn-feature__list" key={i}>
                  <CheckIcon />
                  <span>{item?.description}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
