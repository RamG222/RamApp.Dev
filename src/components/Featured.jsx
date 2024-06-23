import React from 'react'
import './Featured.css'
import flutter from '../Images/flutter.png'
import flutter2 from '../Images/node.png'
import flutter3 from '../Images/react.png'

const Featured = () => {
  return (
    <div className='featured'>
      <div className="first">
        <img src={flutter} alt="" />
        <h3>Flutter Development</h3>
        <p>I am flutter developer with 3+ years of experience. </p>
      </div>
      <div className="second">
        <img src={flutter2} alt="" />
        <h3>NodeJs Development</h3>
        <p>I have been working with backend Development with NodeJs for 1+ years.</p>
      </div>
      <div className="third">
        <img src={flutter3} alt="" />
        <h3>Cross Platform App Development</h3>
        <p>I can develop cross-platform apps for platforms Android, iOS, Web etc. </p>
      </div>
    </div>
  )
}

export default Featured
