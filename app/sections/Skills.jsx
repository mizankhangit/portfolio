import React from "react";
import SectionTitle from "../components/SectionTitle";

const skillCategories = [
  {
    id: 1,
    icon: "💻",
    title: "Languages",
    variant: "primary",
    skills: ["TypeScript", "JavaScript"],
  },
  {
    id: 2,
    icon: "⚛️",
    title: "Frontend",
    variant: "primary",
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Shadcn/UI",
      "GraphQL",
    ],
  },
  {
    id: 3,
    icon: "🔧",
    title: "Backend",
    variant: "secondary",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs"],
  },
  {
    id: 4,
    icon: "🗄️",
    title: "Databases",
    variant: "secondary",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    id: 5,
    icon: "☁️",
    title: "Cloud & DevOps",
    variant: "secondary",
    skills: ["AWS", "Docker", "Git", "GitHub", "GitLab"],
  },
  {
    id: 6,
    icon: "🛠️",
    title: "Frameworks & Platforms",
    variant: "",
    skills: ["React Native", "Vue", "Svelte", "Django", "Laravel", "WordPress", "Shopify"],
  },
  {
    id: 7,
    icon: "🤖",
    title: "AI Tools & IDEs",
    variant: "",
    skills: ["Claude Code", "Codex", "GitHub Copilot", "Antigravity"],
  },
  {
    id: 8,
    icon: "📐",
    title: "Tools & Practices",
    variant: "",
    skills: [
      "Figma",
      "Postman",
      "Responsive Design",
      "Performance Optimization",
      "Code Review",
      "Agile/Scrum",
      "Jira",
      "Cross-Browser Compatibility",
    ],
  },
];

const Skills = () => {
  return (
    <section className="Mzn-section" id="skills">
      <div className="Mzn-container">
        <div className="Mzn-skills-header">
          <SectionTitle
            heading="SKILLS"
            subHeading="Technologies I work with"
          />
        </div>

        <div className="Mzn-skills-grid">
          {skillCategories.map((cat) => (
            <div className="Mzn-skill-category" key={cat.id}>
              <div className="Mzn-skill-category__icon-wrap">{cat.icon}</div>
              <h3 className="Mzn-skill-category__title">{cat.title}</h3>
              <div className="Mzn-skill-pills">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className={`Mzn-skill-pill${
                      cat.variant ? ` Mzn-skill-pill--${cat.variant}` : ""
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
