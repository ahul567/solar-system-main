import './piechart.css';
import React from 'react';
import vac_icon1 from '../assets/Vector_home.svg';
import vac_icon2 from '../assets/Vector4.svg';
import vac_icon3 from '../assets/Vector2.svg';
import vac_icon4 from '../assets/Vector3.svg';
const icons = [vac_icon1, vac_icon2, vac_icon3, vac_icon4];
export default function Rectangle() {
  return (
    <div className='rectangle-container'>
          <div className="fig-box">
        {icons.map((icon,index)=>(
          <div className="icon-circle" key={index}> 
            <img src={icon} className="rect-icon" />
          </div>
       ))}
      </div>
    </div>
  );
}
