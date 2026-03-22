import React from 'react';
import './Piechart.css';
import piechartimg from '../assets/flat-color-icons_pie-chart.svg';
import arrowIcon from '../assets/Vector-arrow.svg';
import runningWindmill from '../assets/running_windmill.svg';
import stopVector from '../assets/stop_Vector.svg';

export default function Piechart() {
  return (
    <div className="piechart-page">
      {/* Asset Operations Header */}
      <div className="asset-operations-box">
        <div className="arrow-circle">
          <img src={arrowIcon} alt="Back Arrow" className="arrow-icon" />
        </div>
        <span className="operations-text">Asset Operations</span>
      </div>

      <div className="piechart-container">
        {/* Caption Text */}
        <div className="caption-box">
          <h2 className="caption-text">2 of 114 Assets are running</h2>
        </div>

        {/* Pie Chart Image */}
        <div className="chart-box">
          <img src={piechartimg} alt="Pie Chart" className="pie-chart-image" />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button className="filter-button">All</button>
        <button className="filter-button">Running</button>
        <button className="filter-button">Stopped</button>
        <button className="filter-button">Alarms</button>
      </div>

      {/* Status Cards */}
      <div className="status-cards">
        {/* Running Status Card */}
        <div className="status-card running">
          <img src={runningWindmill} alt="Running" className="status-image" />
          <div className="status-info">
            <span className="status-text running-text">Running</span>
            <span className="system-name">KN-R21</span>
          </div>
        </div>

        {/* Stopped Status Card */}
        <div className="status-card stopped">
          <img src={stopVector} alt="Stopped" className="status-image" />
          <div className="status-info">
            <span className="status-text stopped-text">Stopped</span>
            <span className="system-name">SJ-517</span>
          </div>
        </div>
      </div>

      {/* System Buttons Grid */}
      <div className="systems-grid">
        <button className="system-btn green">SJ-517</button>
        <button className="system-btn red">SJ-517</button>
        <button className="system-btn green">SJ-517</button>
        <button className="system-btn green">SJ-517</button>

        <button className="system-btn red">SJ-517</button>
        <button className="system-btn green">SJ-517</button>
        <button className="system-btn red">SJ-517</button>
        <button className="system-btn green">SJ-517</button>

        <button className="system-btn green">SJ-517</button>
        <button className="system-btn green">SJ-517</button>
        <button className="system-btn yellow">SJ-517</button>
        <button className="system-btn green">SJ-517</button>

        <button className="system-btn yellow">SJ-517</button>
        <button className="system-btn red">SJ-517</button>
        <button className="system-btn green">SJ-517</button>
        <button className="system-btn red">SJ-517</button>

        <button className="system-btn green">SJ-517</button>
        <button className="system-btn green">SJ-517</button>
        <button className="system-btn red">SJ-517</button>
        <button className="system-btn yellow">SJ-517</button>

        <button className="system-btn red">SJ-517</button>
        <button className="system-btn green">SJ-517</button>
        <button className="system-btn red">SJ-517</button>
        <button className="system-btn green">SJ-517</button>
      </div>
    </div>
  );
}
