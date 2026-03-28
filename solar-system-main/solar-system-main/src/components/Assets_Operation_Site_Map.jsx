import React from 'react';
import './Assets_Operation_Site_Map.css';
import arrowIcon from '../assets/Vector-arrow.svg';
import windmillIcon from '../assets/windmills.svg';
import worldMap from './Power_dataset/Assets/grommet-icons_map.svg';
import world_map from '../assets/World_map.png';
const assetData = [
  { name: 'Wind Farm Alpha', units: '18m Units', status: 'Operational', percent: '92.1%', color: '#1E7A46' },
  { name: 'Site Farm Alpha', units: '19m Units', status: 'Warning', percent: '78.5%', color: '#F7B500' },
  { name: 'Solar Plant Beta', units: '18m Units', status: 'Not Working', percent: '10.5%', color: '#E53A47' },
];

export default function AssetsOperationSiteMap() {
  return (
    <div className="site-map-page">
      <div className="site-map-pill">
        <div className="site-map-arrow-circle">
          <img src={arrowIcon} alt="Back" className="site-map-arrow-icon" />
        </div>
        <span className="site-map-title">Asset Operations Site Map</span>
      </div>
           
      <div className="site-map-content">
        <h2 className="site-content">Site Overview</h2>

        <div className="site-overview-card">
          <div className="overview-item">
            <div className="overview-label">Total Project Size</div>
            <div className="overview-value-1">2350 MW</div>
          </div>
          <div className="overview-item">
            <div className="overview-label">Average PLF %</div>
            <div className="overview-value-2">88.7%</div>
          </div>
        </div>

        <div className="site-map-visual">
         <img src={world_map} alt="" />
        </div>

        <h3 className="global-asset-content">Global Asset Status Count</h3>
        <div className="site-map">
        <div className="status-chips-1">
          <span className="operational">Operational</span>
          </div>
          <div className="status-chips-2">
          <span className="warning">Warning</span></div>
          <div className="status-chips-3">
          <span className="not-working">Not Working</span>
        </div>
       </div>
        <div className="asset-list">
          {assetData.map((asset, idx) => (
            <div key={idx} className="asset-row">
              <div className="asset-info">
                <div className="asset-status-circle" style={{ borderColor: asset.color }}>
                  <img src={windmillIcon} alt="Windmill" />
                </div>
                <div>
                  <span className="asset-name">{asset.name}</span>
                  <span className="asset-units">{asset.units}</span>
                </div>
              </div>
              <span className="asset-percent" style={{ color: asset.color }}>
                {asset.percent}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
