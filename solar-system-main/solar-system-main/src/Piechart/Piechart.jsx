import React from 'react';
import './piechart.css';
import Turbine from './turbinename.jsx';
import piechartimg from '../assets/flat-color-icons_pie-chart.svg';
import carbon_wind from '../assets/running_windmill.svg';
import stopped_wind from '../assets/stop_Vector.svg';
import Listing from "./ListingComponent/Listingcomp.jsx";
import Rectangle from "./Rectangle.jsx";
import Assetoperationbox from './Assetoperationbox.jsx';
export default function Piechart() {
  const labels=['All','Running','Stopped','Alarm'];
  
  
  return (
    
    <div className="winbox">
      <Assetoperationbox/>
        
      <div className="piechartbox" >
       
        <div className="chart-text-box">
          <h2 className="chart-text">2 of 114 Assets are running</h2>
        </div>
        <img className="pie-chart" style={{marginLeft:50}} src={piechartimg} />
      </div>
       
      <div 
            
        style={{ 
          display: "flex",
          justifyContent: "center",
          marginLeft: "800px",
          marginTop: "-50px",
          gap: "65px"
          }}
          >
          {
            labels.map((label, index)=>(
              <Listing key={index} text={label} />
          ))}  
       </div>
      
      <div className="status-wrapper" style={{gap:120}}>
        <div className="rec-box">
          <img className="running-wind-mill" src={carbon_wind} alt="carbon-wind" />
          <div className="Status-box">
            <p className="status-typo">Running</p>
            <p className="status-typo2">KN- R21</p>
          </div>
        </div>

        <div className="rec-box2">
          <img className="stopped-wind-mill" src={stopped_wind} alt="stopped-wind" />
          <div className="Status-box2">
            <p className="stopped-status-typo">Stopped</p>
            <p className="stopped-status-typo2">SJ-517</p>
          </div>
        </div>
      </div>
      <div style={{marginLeft:800, marginTop:-160}}>
        <Turbine/>
        </div> 
        <Rectangle/>
      
    </div>
  );
   
}
