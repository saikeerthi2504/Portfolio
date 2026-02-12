import React from 'react'
import './Home.css'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function Home() {
  return (
    <>
    <div className="container" style={{gap:"100px"}}>
      
      <img src="/SaikeerthiProfile.jpg" className="image" alt="Me" />

      <div className="content">
        <h1>Ch Sai Keerthi</h1>
        <p>I am a Fresher Java Full Stack Developer with strong knowledge of Java, Spring Boot, React, and SQL. I enjoy building scalable web applications and writing clean, maintainable code. I am passionate about learning new technologies and improving my development skills.</p>
      </div>
    </div>
    <p style={{color:"white"}}>FollowMe ON </p>
     <div className="social-icons" style={{ paddingLeft:"520px",color:"white" }}>
       <a href="https://wa.me/7702062390" target="_blank"><FaWhatsapp/></a>
       <a href="https://twitter.com/yourProfile" target="_blank"><FaTwitter /></a>
       <a href="https://instagram.com/saikeerthi2504" target="_blank"><FaInstagram /></a>
       <a href="https://github.com/yourProfile" target="_blank"><FaGithub /></a>
       <a href="https://linkedin.com/in/Saikeerthi Chittamuri" target="_blank"><FaLinkedin /></a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saikeerthinarasimha@gmail.com" target="_blank"><FaEnvelope /></a>
     </div>
    </>
  )
}

export default Home;
