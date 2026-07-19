"use client";

import React, { useState } from "react";
import dataPro from "@/data-pro";
import dataPer from "@/data-per";
import SectionTitle from "@/app/components/SectionTitle";
import ProjectCard from "@/app/components/ProjectCard";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("professional");

  const personalReactNode = dataPer.filter(
    (item) => item.tag === "re" || item.tag === "no"
  );

  const personalJsCss = dataPer.filter(
    (item) => item.tag === "js" || item.tag === "hc"
  );

  const tabs = [
    { id: "professional", label: "Professional", count: dataPro.length },
    { id: "react-node",   label: "React & Node", count: personalReactNode.length },
    { id: "js-css",       label: "JS & HTML/CSS", count: personalJsCss.length },
  ];

  const activeProjects =
    activeTab === "professional"
      ? dataPro
      : activeTab === "react-node"
      ? personalReactNode
      : personalJsCss;

  return (
    <section className="Mzn-section" id="projects">
      <div className="Mzn-container">
        <div className="Mzn-project-wrapper">
          <SectionTitle
            heading="PROJECTS"
            subHeading="Selected professional work"
          />

          {/* Tab Navigation */}
          <div className="Mzn-project-tabs" role="tablist">
            {/* {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`Mzn-project-tab${activeTab === tab.id ? " active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
                id={`tab-${tab.id}`}
              >
                {tab.label}
                <span className="tab-count">{tab.count}</span>
              </button>
            ))} */}
          </div>

          {/* Projects Grid */}
          <div className="Mzn-projects-container">
            <div className="Mzn-projects" role="tabpanel">
              {activeProjects.map((project, i) => (
                <ProjectCard
                  project={project}
                  key={`${activeTab}-${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
