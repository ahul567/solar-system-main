import React from 'react';
import Piechart from './Piechart/Piechart.jsx';
import AuraGreen from './AuraGreen/AuraGreen.jsx';
import Social_Media from './Social_Media/Social_Media.jsx';
import Loginmail from './login_via_email/Loginmail.jsx';
import Dashboard from "./components/Dashboard";
import PortfolioPage from "./components/PortfolioPage";
import RenewProfile from "./components/RenewProfile";
import RunningAssetsOperation from "./components/Running-assets-operation";
import AlarmLog from "./components/AlarmLog";
import AssetsOperationSiteMap from "./components/Assets_Operation_Site_Map";
import {Routes,Route} from 'react-router-dom';
export default function App() {
  return (
  <div>
    <Routes>
      <Route path="/portfolio" element={<PortfolioPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/asset-operation" element={<Piechart/>}/>
      <Route path="/running-asset-operation" element={<RunningAssetsOperation/>}/>
      <Route path="/asset-operation-site-map" element={<AssetsOperationSiteMap/>}/>
      <Route path="/auragreen" element={<AuraGreen/>}/>
      <Route path="/social-media" element={<Social_Media/>}/>
      <Route path="/login-via-email" element={<Loginmail/>}/>
      <Route path="/RenewProfile" element={<RenewProfile/>}/>
      <Route path="/alarm-log" element={<AlarmLog/>}/>
    </Routes>
 </div>
  );
}