import React from 'react'
import './Loginmail.css'
import AuraGreen from '../assets/AuraGreen.svg';
import ic_mail from '../assets/ic_outline-email.svg';
const database = {
 [
    icon: ic_mail,
     text: "Enter Your Email";

  ]
}
export default function Loginmail() {
  return (
    <div className='win-box'>
      <img className='AuraGreenImage' src={AuraGreen} alt="" />
      <div className="mailbox">
        <div className='sub-box-mail'></div>
      </div>
    </div>

  )
}
