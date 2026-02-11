import React from 'react'
import AuraGreen_img from '../assets/AuraGreen.svg';
import AuraBanner from './AuraBanner.jsx';
import Get_Started from './Get_Started.jsx';
import './AuraGreen.css'
const banner_database=[{
 head:"Welcome to EcoGen!",
 span:"your smart partner in building a cleaner, greener future"
}];
export default function AuraGreen() {
  return (
    <div className='Aura-Banner'>
          
            <img className='Aura-img' src={AuraGreen_img} alt="" />
            {
              banner_database.map((value,index)=>(
                <AuraBanner key={index} head={value.head} span={value.span}/>
              ))}
           
           <Get_Started/>
           
    </div>
  )
}
