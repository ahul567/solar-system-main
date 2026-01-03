import React from 'react'
import fb from '../assets/logos_facebook.svg';
import google from '../assets/devicon_google.svg';
import apple from '../assets/devicon_apple.svg';
import './Social_Media.css';
const icon_data={
     iconsdb: [ 
      
        {icon: fb, text: "Connect with facebook"},
        {icon: google, text: "Connect with Google"},
        {icon: apple, text: "Connect with Apple"}
    ]
};
export default function Media_Item() {
  return (
    <div>
      {icon_data.iconsdb.map((user)=>(
       <div className='facebook-box'>
        <div className='facebook'>
           <img src={user.icon} alt="" />
         <p>{user.text}</p>
        </div>
          
        </div>
      ))
     
      }
   
        </div>
  )
}
