import React from 'react'
import './About.css'
import HAPIVID from './mediapage/hapivid.mp4'

const About = () => {
  return (
    <>
    <div id='about' className="About">
      <div className="container3">
    <nav>
      <h2><a href="https://maps.app.goo.gl/XNMg6aPGVSgLuAS3A" target="_blank">Mabilao, San Fabian Pangasinan</a></h2>
      <h1><a href="https://maps.app.goo.gl/XNMg6aPGVSgLuAS3A" target="_blank">HAPPY RIPPLES</a></h1>
      <p>A tranquil beach escape in San Fabian, Pangasinan. Our resort offers a blend of modern comfort and genuine hospitality, ensuring every guest a serene and personalized experience. Nestled along the pristine shoreline, we invite you to unwind in our thoughtfully designed accommodations, savor local flavors at our beachfront restaurant, and immerse yourself in the beauty of this coastal paradise. Join us at Happy Ripples for a memorable seaside retreat where relaxation meets adventure.</p>
    </nav>

    <div className="video-container">
            <video controls autoPlay loop muted>
              <source src={HAPIVID} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

    </div>
    </div>
    
    </>
  )
}

export default About

