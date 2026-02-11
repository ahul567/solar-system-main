import React from 'react'
import "./piechart.css"
import vec_arrow from "../assets/Vector-arrow.svg"
export default function Assetoperationbox() {
  return (
    <div className='asset-operation-box'>
         <div className="Ellipse">
           <div className="teeny-icons">
            
              <img src={vec_arrow} alt=""  className="vec-arrow"/>
           
           </div>
         </div>
          <span className="title_box">Asset Operations</span>
    </div>
  )
}
