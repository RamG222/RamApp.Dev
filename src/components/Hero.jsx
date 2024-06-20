import React from 'react'
import profile from '../Images/profile.jpg'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="left">
        <p className='first'>Google Flutter | NodeJs</p>
        <h2>Android & iOS <br /> Developer</h2>
        <p className='second'>I am freelance app developer.</p>
      </div>
      <div className="right">
        <img src={profile} alt="" />
      </div>
    </div>
  )
}

export default Hero
