import React from 'react'
import './AboutMe.css'

function AboutMe() {
  return (
    <div className="about-container">
      <div className="skills-wrapper">
      <h2 style={{color:"blue"}}  className="heading">About Me</h2>
      </div>
      <p>
       I am a B.Tech graduate and an aspiring Java Full Stack Developer. I have hands-on experience in developing web applications using Java, Spring Boot, React, and MySQL.

I understand both frontend and backend development and enjoy working on complete application flow, from UI design to database integration. I am a quick learner, highly motivated, and ready to contribute to real-world projects.
      </p>

      <p>
        I am a self-motivated person and I like solving problems, creating clean
        interfaces, and writing neat code. My goal is to become a strong Full Stack Developer and work on real-world projects.
      </p>

      <p>
        When I am not coding, I enjoy drawing, reading, and listening to music.
      </p>
      <div className="skills-wrapper">
      <h2 style={{color:"blue"}} className="heading">Work Philosophy</h2>
      </div>
      <p>I Believe in building fearlessly and learning endlessly.Open for freelance Collaborations and love helping startups turn bold ideas into real digital products</p>
      <div className="skills-wrapper">
      <h2 style={{color:"blue"}} className="heading">Education</h2>
      </div>
      <h4 style={{color:"white"}}>B.Tech in CSE</h4>
      <p>Priyadarsini College of Engineering and Technology(2021-2025)</p>
      <h4 style={{color:"white"}}>Intermediate(MPC)</h4>
      <p>APSWRJC Muthukur(2019-2021)</p>
       <div className="skills-wrapper">
        <h2 style={{color:"blue"}} className="heading">Skills</h2>
       </div>
    <div className="skills-wrapper">
      <div className="skill">ReactJS</div>
      <div className="skill">JavaScript</div>
      <div className="skill">CSS</div>
      <div className="skill">Bootstrap</div>
      <div className="skill">HTML</div>
      <div className="skill">NodeJS</div>
      <div className="skill">ExpressJS</div>
      <div className="skill">SpringBoot</div>
      <div className="skill">MySQL</div>
   </div>
    </div>
  )
}

export default AboutMe;
