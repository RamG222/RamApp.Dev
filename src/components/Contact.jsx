import React from 'react'
import './Contact.css'
import fb from '../Images/fb.png'

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <div className="left">
        <h3>Let's work together | Contact</h3>
        <p>Fill form to contact me. <br></br>Email: ram@ramapp.dev </p>
        <div className='socials'>
            {/* <img src={fb} alt="" />
            <img src={fb} alt="" /> */}
        </div>
      </div>
      <div className="right">
        <form >
            <div>
            <input type="text" placeholder='Name'/>
            </div>
            <div>
            <input type="text" placeholder='Email'/>
            </div>
            <div>
            <textarea name="" placeholder='Type you message here' id="" rows={10}></textarea>
            </div>
            <div>
            <button>Submit</button>
            </div>
        </form>
      </div>
    </div>
    <hr />
</>
  )
}

export default Contact
