import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">

      {/* CARD 1 */}
      <div className="project-card blue-glow">
        <h2 className="project-title">E-Commerce Application</h2>

        <p className="project-description">
            An E-Commerce Application built with React for the frontend and Node.js/Express for the backend. It features user authentication, product listings, a shopping cart, and order management.
        </p>

        <div className="project-footer">
          <a href="#" className="github-link">
            Check on Github <FaGithub />
          </a>

          <a href="#" className="read-more">Read More &gt;&gt;</a>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="project-card pink-glow">
        <h2 className="project-title">QuickLearn With Robot</h2>

        <p className="project-description">
          QuickLearn With Robot is an educational platform that uses AI-powered robots to provide interactive learning experiences, personalized tutoring, and real-time feedback for students of all ages.
        </p>

        <div className="project-footer">
          <a href="#" className="github-link">
            Check on Github <FaGithub />
          </a>

          <a href="#" className="read-more">Read More &gt;&gt;</a>
        </div>
      </div>

    </div>
  );
}

export default Projects;
