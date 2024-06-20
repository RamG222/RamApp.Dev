import React from 'react'
import './Contact.css'
import fb from '../Images/fb.png'

const Contact = () => {
  return (
    <>
    <div className='contact'>
      <div className="left">
        <h3>Let's work together</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem commodi numquam atque architecto id ipsam incidunt enim eos ea repudiandae sunt vero eligendi placeat velit nobis laborum, qui assumenda.</p>
        <div className='socials'>
            <img src={fb} alt="" />
            <img src={fb} alt="" />
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
