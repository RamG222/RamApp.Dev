import React from 'react'
import './Featured.css'
import flutter from '../Images/flutter.png'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="first">
        <img src={flutter} alt="" />
        <h3>Flutter Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius laboriosam cumque non vel modi nostrum dolor hic. Unde vero voluptates cumque iste! Eos, iusto.</p>
      </div>
      <div className="second">
        <img src={flutter} alt="" />
        <h3>NodeJs Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius laboriosam cumque non vel modi nostrum dolor hic. Unde vero voluptates cumque iste! Eos, iusto.</p>
      </div>
      <div className="third">
        <img src={flutter} alt="" />
        <h3>Cross Platform App Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eius laboriosam cumque non vel modi nostrum dolor hic. Unde vero voluptates cumque iste! Eos, iusto.</p>
      </div>
    </div>
  )
}

export default Featured
