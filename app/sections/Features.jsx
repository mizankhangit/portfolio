import React from "react";
import CheckIcon from "../components/icons";
import SectionTitle from "../components/SectionTitle";

const data = [
  {
    title: "User Authentication and Authorization",
    description:
      "Implement secure user authentication and authorization systems using technologies like JWT, or role-based access control.",
  },
  {
    title: "Responsive Web Design",
    description:
      "Ensure that the application is responsive, providing an excellent user experience on various devices and screen sizes.",
  },
  {
    title: "Database Design and Management",
    description:
      "Optimize database schema and query performance for efficient data storage and retrieval.",
  },
  {
    title: "RESTful API Development",
    description:
      "Design and develop robust and well-documented APIs for seamless communication between front-end and back-end components.",
  },
  {
    title: "Real-time Features",
    description:
      "Implement real-time functionality using technologies like WebSockets for chat, notifications, or live updates.",
  },
  {
    title: "Search and Filtering",
    description:
      "Create advanced search and filtering features to help users quickly find relevant information.",
  },
  {
    title: "Data Visualization",
    description:
      "Develop interactive data visualization components using libraries like D3.js or Chart.js.",
  },
  {
    title: "Internationalization and Localization",
    description:
      "Add support for multiple languages and regions to make the application accessible to a global audience.",
  },
  {
    title: "Performance Optimization",
    description:
      "Optimize the application's performance by minimizing load times, reducing latency, and caching frequently accessed data.",
  },
  {
    title: "Security",
    description:
      "Implement security features, such as input validation, protection against common web vulnerabilities (e.g., Cross-Site Scripting, SQL Injection), and encryption of sensitive data.",
  },
  {
    title: "Cloud Integration",
    description:
      "Integrate the application with cloud services (e.g., AWS, Azure, or Google Cloud) for scalability and reliability.",
  },
  {
    title: "Automated Testing",
    description:
      "Develop unit, integration, and end-to-end tests to ensure the application's stability and reliability.",
  },
  {
    title: "Logging and Monitoring",
    description:
      "Implement comprehensive logging and monitoring systems to detect and diagnose issues in real-time.",
  },
  {
    title: "Content Management",
    description:
      "Create content management systems to allow non-technical users to manage website content easily.",
  },
  {
    title: "E-commerce Features",
    description:
      "Implement features like shopping carts, payment gateways, and order management for e-commerce applications.",
  },
  {
    title: "User Feedback and Analytics",
    description:
      "Integrate user feedback and analytics tools to gather insights and make data-driven decisions for improvements.",
  },
  {
    title: "Mobile App Integration",
    description:
      "Create mobile app counterparts or responsive design for better mobile accessibility.",
  },
  {
    title: "Scalability",
    description:
      "Plan for and implement strategies for scaling the application as user traffic and data volume grow.",
  },
  {
    title: "Documentation",
    description:
      "Maintain clear and up-to-date documentation for code, APIs, and system architecture.",
  },
  {
    title: "Continuous Integration and Deployment (CI/CD)",
    description:
      "Set up CI/CD pipelines to automate the deployment process, ensuring a smooth and error-free release cycle.",
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
