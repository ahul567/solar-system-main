import React from 'react'
import './Loginmail.css'
import AuraGreen from '../assets/AuraGreen.svg';
import ic_mail from '../assets/ic_outline-email.svg';
import ic_password from '../assets/password_icon.svg';
import ic_hidden from '../assets/Vision_icon.svg';
const database = {
 typebox: [
  {
    icon: ic_mail,
     text: "Enter Your Email"
  }
 ]
}
const password_db = {
  password_detail:[
    {
     icon : ic_password,
     text: "........",
     hidden_icon: ic_hidden
    }
  ]
}
export default function Loginmail() {
  return (
    <div className='win-box'>
      <img className='AuraGreenImage' src={AuraGreen} alt="" />
      <div className="mailbox">
        <div className='sub-box-mail'>
       { database.typebox.map((item,index)=>(
        <div key={index} className='input-box-mail' style={{display:'flex',gap:'4.3%',marginTop:'5%', marginLeft:'1.8%'}}>
          <img className='icon-mail' src={item.icon} alt="" />
          <p className='input-mail'>{item.text}</p>
        </div>
       ))}

        </div>
      </div>
      <div className="passwordbox" style={{marginTop: 24}}>
       {password_db.password_detail.map((pass_item,index)=>(
        <div key={index} className='sub-box-pass' style={{marginBottom:16}}>
          <img className="lock-icon" src={pass_item.icon} style={{marginLeft:10}}/>
          <p className='input-pass'  style={{marginBottom:-5, marginLeft:20}}>{pass_item.text}</p>
          <div className="vision">
            <img className="hidden-icon" src={pass_item.hidden_icon} style={{marginLeft:220}}alt="" />
          </div>
        </div>
       ))} 
      </div>
      <div className="recovery-account">
        <div className="checkbox-text">
          <div className="checkbox"></div>
          <span className="rem-me">Rember Me</span>
          <p className="rec-pass">Forgot Password?</p>
        </div>
      </div>
      <div className="sign-in-box"><p className='textbox'>Sign in with Email</p></div>
      <div className='divider'>
       <div className="line1"></div>
       <span className='social-media-ref'>Or Continue With</span>
        <div className="line1"></div>
     </div>
    </div>

  )
}
