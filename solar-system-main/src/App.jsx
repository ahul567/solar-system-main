import React from 'react';
import Piechart from './Piechart/Piechart.jsx';
import AuraGreen from './AuraGreen/AuraGreen.jsx';
import {Routes,Route} from 'react-router-dom';
export default function App() {
  return (
  <div>
    <Routes>
      <Route path="/asset-operation" element={<Piechart/>}/>
      <Route path="/auragreen" element={<AuraGreen/>}/>
    </Routes>
    
    
  </div>
   
   
 
  
  
  );
}