import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import AboutMe from './AboutMe'
import Projects from './Projects'
import './App.css'
import { FaWhatsapp } from 'react-icons/fa'
import ProfileSidebar from './ProfileSidebar'
function App() {
  return (
   <>
    <ProfileSidebar />
   <div style={{backgroundColor:"black", width:"100vw", height:"100vh", textAlign:"center",borderRadius:"10px"}}>
   <BrowserRouter>
   <div style={{padding:"20px", fontSize:"20px", display:"flex", justifyContent:"center",backgroundColor:"black",borderRadius:"10px", gap:"30px"}}>
   <Link to="/" className="nav-link">Home</Link>
   <Link to="/about" className="nav-link">About Me</Link>
   <Link to="/projects" className="nav-link">Projects</Link>

   
   <a style={{marginLeft:"120px",backgroundColor:"green", color:"white", padding:"5px 10px", borderRadius:"5px", display:"flex", alignItems:"center", gap:"5px"}} href="https://wa.me/7702062390" target="_blank"><FaWhatsapp/>WhatsApp</a>
   </div>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<AboutMe/>}/>
    <Route path='/projects' element={<Projects/>}/>
    
  </Routes>
   </BrowserRouter>
   </div>
   </>
  )
}

export default App;