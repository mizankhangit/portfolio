import React from "react";
import SectionTitle from "../components/SectionTitle";

const features = [
  {
    icon: "⚡",
    title: "High-Performance UI",
    description:
      "Building fast, optimized interfaces with minimal load times through code splitting, lazy loading, and smart caching strategies.",
  },
  {
    icon: "📱",
    title: "Responsive Web Design",
    description:
      "Pixel-perfect responsive layouts that deliver excellent user experience across all devices and screen sizes.",
  },
  {
    icon: "🔌",
    title: "API Integration",
    description:
      "Seamless REST and GraphQL API integration with robust error handling, optimistic updates, and real-time data sync.",
  },
  {
    icon: "🔴",
    title: "Real-time Features",
    description:
      "WebSocket-powered live features — chat, notifications, live dashboards — delivering instant, reactive user experiences.",
  },
  {
    icon: "📊",
    title: "Data Visualization",
    description:
      "Interactive charts and analytics dashboards using Plotly.js and D3.js to transform complex data into clear insights.",
  },
  {
    icon: "🏗️",
    title: "Clean Architecture",
    description:
      "Writing maintainable, reusable code with strong patterns — Redux Toolkit, modular components, and consistent naming conventions.",
  },
  {
    icon: "🔐",
    title: "Auth & Security",
    description:
      "Implementing secure authentication flows using JWT, role-based access control, and protection against common vulnerabilities.",
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    description:
      "Deployment and scaling on AWS with Docker containers and CI/CD pipelines for efficient, reliable release cycles.",
  },
  {
    icon: "🤝",
    title: "Team Leadership",
    description:
      "Leading frontend teams, conducting code reviews, mentoring junior developers, and upholding engineering best practices.",
  },
];

const Features = () => {
  return (
    <section className="Mzn-section" id="features">
      <div className="Mzn-container">
        <div className="Mzn-feature">
          <div className="Mzn-feature__header">
            <SectionTitle
              centered={true}
              heading="CAPABILITIES"
              subHeading="What I bring to the table"
            />
            <p className="Mzn-feature__desc">
              A comprehensive set of skills and capabilities built over 6+ years
              of professional frontend and fullstack development.
            </p>
          </div>

          <ul className="Mzn-feature__lists">
            {features.map((item, i) => (
              <li className="Mzn-feature__list" key={i}>
                <div className="feature-icon-wrap">
                  <span className="feature-icon">{item.icon}</span>
                </div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
