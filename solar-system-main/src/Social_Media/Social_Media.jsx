import React from 'react'
import save_world from '../assets/save_world.svg';
import Media_Item from './Media_Item.jsx';
import './Social_Media.css';
export default function Social_Media() {
  return (
    <div className='window-box'>
      <img className="save-world-img"src={save_world} alt="" />
       <p className="text-box">let's you in</p>
        <Media_Item/>
        <div className="horizontal-line">
          <div className="line1"></div>
          <span className='or-text'>Or</span>
          <div className="line1"></div>
        </div>
          <div className='sign-via-mail'>
            <div className="signin-box">
              <p className='paragraph-text'>Sign in with Email</p>
            </div>
          </div>
          <p className='account-purpose'>Don't have an account? <span className='signUp'>Sign Up</span></p>
    </div>
   
   
  )
}
