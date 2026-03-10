import React from 'react'
import myPicture from '../assets/my-picture.png'

const Hero = () => {
  return (
<section className="home" id="home">

  <div className="hero-text">
    <h2>
      Hi<span className="accent">,</span><br/>
      I<span className="accent">'</span>m <span className="accent">A</span>nna
    </h2>

    <p className="title">FULL STACK WEB DEVELOPER</p>
  </div>

  <img src={myPicture} alt="Anna" className="hero-image"/>


      <div className="tech-stack">
  <span>React</span>
  <span>Java</span>
  <span>Python</span>
  <span>SQL</span>
  <span>MongoDB</span>
</div>

    </section>
  )
}

export default Hero