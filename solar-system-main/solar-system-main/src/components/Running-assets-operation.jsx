import React from 'react';
import './Running-assets-operation.css';
import arrowIcon from '../assets/Vector-arrow.svg';
import windmillIcon from '../assets/windmills.svg';

const assetsData = [
  { id: 1, name: 'GA97-560', running: 'Running for 6 hours', power: '0kw', wind: '0.0 m/s' },
  { id: 2, name: 'GA97-560', running: 'Running for 6 hours', power: '0kw', wind: '0.0 m/s' },
  { id: 3, name: 'GA97-560', running: 'Running for 6 hours', power: '0kw', wind: '0.0 m/s' },
  { id: 4, name: 'GA97-560', running: 'Running for 6 hours', power: '0kw', wind: '0.0 m/s' },
  { id: 5, name: 'GA97-560', running: 'Running for 6 hours', power: '330', wind: '5.4 m/s' },
  { id: 6, name: 'GA97-560', running: 'Running for 6 hours', power: '199', wind: '2.3 m/s' },
  { id: 7, name: 'GA97-560', running: 'Running for 6 hours', power: '0kw', wind: '0.0 m/s' },
  { id: 8, name: 'GA97-560', running: 'Running for 6 hours', power: '0kw', wind: '0.0 m/s' },
];

export default function RunningAssetsOperation() {
  return (
    <div className="running-assets-page">
      <div className="running-asset-operations-box">
        <div className="running-arrow-circle">
          <img src={arrowIcon} alt="Back Arrow" className="running-arrow-icon" />
        </div>
        <span className="running-operations-text">Running Asset Operations</span>
      </div>

      <div className="running-caption-box">
        <h2 className="running-caption-text">33 of 33 Assets are running</h2>
      </div>

      <div className="running-assets-list">
        {assetsData.map((asset) => (
          <div key={asset.id} className="running-asset-item">
            <div className="running-asset-icon-circle">
              <img src={windmillIcon} alt="Windmill" className="running-asset-icon" />
            </div>
            <div className="running-asset-details">
              <span className="running-asset-name">{asset.name}</span>
              <span className="running-asset-duration">{asset.running}</span>
            </div>
            <div className="running-asset-row">
              <div className="running-asset-column">
                <span className="running-column-label">Power</span>
                <span className="running-column-value">{asset.power}</span>
              </div>
              <div className="running-asset-column">
                <span className="running-column-label">Wind</span>
                <span className="running-column-value">{asset.wind}</span>
              </div>
              <div className="running-asset-actions">
                <span className="running-comments-link">Comments</span>
                <span className="running-add-task-link">Add Task</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
