import './piechart.css';
import React from 'react'



export default function turbinename() {
const green = "rgba(26, 255, 0, 1)";
  const red = "rgba(255, 8, 8, 1)";
  const yellow ="rgba(255, 255, 46, 1)";

  const turbcolors=[green, red, green, green,
    green, yellow, green, red,
    yellow, green, yellow, red,
    green, green, green, red,
    yellow, green, green, yellow,
    green, red, green, green
  ];
  return(
    <div className='turbine-grid'>
        {turbcolors.map((color, index) => (
       <div key = {index} 
       className= "turbine-name-box"
       >
        <span 
        className="turbine-name-text"
        style={{color: color}}>
            SJ-517
        </span>
        
       </div>
       
       ))}  
    </div>
       

    
  );
}


