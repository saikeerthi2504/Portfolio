import React, { useState } from "react";
import "./ProfileSidebar.css";

const ProfileSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Profile Button */}
      <div className="profile-floating-btn" onClick={() => setOpen(true)}>
        {/* <img src="/me.jpg" alt="profile" /> */}☰
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : ""}`}>
        
        <button className="close-btn" onClick={() => setOpen(false)}>×</button>

        <div className="profile-image-big">
          <img src="/saikeerthiprofileee.jpg" alt="profile" />
        </div>

        <h2>Ch Saikeerthi</h2>
        <p className="subtext">
           B.Tech(CSE) in <br /> Priyadarsini College, Nellore
        </p>

        <div className="section-title">Contact</div>

        <p className="row"><strong>Contact:</strong> +91 7702062390</p>
        <p className="row"><strong>Email:</strong> saikeerthinarasimha@gmail.com</p>
        <p className="row"><strong>LinkedIn:</strong> saikeerhtiChittamuri</p>
        <p className="row"><strong>Github:</strong> Saikeerthi2504</p>

        <div className="section-title">Skills</div>

        <div className="skill">
          <span>React Js</span> <span>85%</span>
          <div className="bar"><div className="fill" style={{ width: "85%" }}></div></div>
        </div>

        <div className="skill">
          <span>HTML / CSS</span> <span>70%</span>
          <div className="bar"><div className="fill" style={{ width: "70%" }}></div></div>
        </div>

        <div className="skill">
          <span>JavaScript</span> <span>75%</span>
          <div className="bar"><div className="fill" style={{ width: "75%" }}></div></div>
        </div>

        <div className="skill">
          <span>Java</span> <span>95%</span>
          <div className="bar"><div className="fill" style={{ width: "95%" }}></div></div>
        </div>

        <div className="skill">
          <span>SpringBoot</span> <span>70%</span>
          <div className="bar"><div className="fill" style={{ width: "70%" }}></div></div>
        </div>
        <div className="skill">
          <span>MySQL</span> <span>80%</span>
          <div className="bar"><div className="fill" style={{ width: "80%" }}></div></div>
        </div>
        <div className="skill">
          <span>AWS</span> <span>70%</span>
          <div className="bar"><div className="fill" style={{ width: "70%" }}></div></div>
        </div>

        <div className="section-title">Knowledge</div>

<ul className="knowledge-list">
  <li>✔ Programming Fundamentals</li>
  <li>✔ Object-Oriented Programming (OOP)</li>
  <li>✔ REST API Development</li>
  <li>✔ Database Management (SQL)</li>
  <li>✔ Cloud Deployment Basics (AWS)</li>
  <li>✔ Git & GitHub Usage</li>
  <li>✔ Debugging & Problem Solving</li>
</ul>

      </div>
    </>
  );
};

export default ProfileSidebar;
