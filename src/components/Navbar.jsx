import React from 'react'
import './Navbar.css'
import logo from './media/hapirips.png'

const Navbar = ({ scrollToSection }) => {
  return (
    <>
    
    <nav>
       <img src={logo}/>

       <ul>
        <li><button onClick={() => scrollToSection('room')}>Accommodations</button></li>
        <li><button onClick={() => scrollToSection('acti')}>Activities</button></li>
        <li><button onClick={() => scrollToSection('about')}>About Us</button></li>
       </ul>


    </nav>
    
    
    
    </>
  )
}

export default Navbar