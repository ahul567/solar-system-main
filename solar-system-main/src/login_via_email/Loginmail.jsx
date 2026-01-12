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
      <div className="passwordbox">
       {password_db.password_detail.map((pass_item,index)=>(
        <div key={index} className='sub-box-pass'>
          <img src={pass_item.icon}/>
          <p className='input-pass'>{pass_item.text}</p>
          <div className="vision">
            <img className="hidden-icon" src={pass_item.hidden_icon} alt="" />
          </div>
        </div>
       ))}
      </div>
    </div>

  )
}
