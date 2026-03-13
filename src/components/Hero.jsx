import React from 'react'
import myPicture from '../assets/my-picture.png'

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="container text-center">
        <div id="greeting">
          <h2 className="display-1 fw-bold">HI<span className="accent">,</span><br />
          I<span className="accent">'</span>M <span className="accent">ANNA</span></h2>
          <p className="title mt-3">FULL STACK WEB DEVELOPER</p>
          

          <div className="d-flex justify-content-center gap-2 mt-4">
            <span className="badge rounded-pill border text-dark px-3 py-2">React</span>
            <span className="badge rounded-pill border text-dark px-3 py-2">Java</span>
            <span className="badge rounded-pill border text-dark px-3 py-2">Python</span>
            <span className="badge rounded-pill border text-dark px-3 py-2">SQL</span>
            <span className="badge rounded-pill border text-dark px-3 py-2">MongoDB</span>
            <span className="badge rounded-pill border text-dark px-3 py-2">AWS</span>
          </div>
        </div>
      </div>

      <div className="my-picture">
        <img src={myPicture} alt="Anna" />
      </div>
    </section>
  )
}

export default Hero