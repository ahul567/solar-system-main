import React from 'react';
import './AlarmLog.css';
import arrowIcon from '../assets/Vector-arrow.svg';
import pieIcon from '../assets/flat-color-icons_pie-chart-1.svg';

export default function AlarmLog() {
  return (
    <div className="alarm-log-page">
      <div className="alarm-log-card">
        <div className="alarm-log-pill">
          <div className="alarm-log-back-circle">
            <img src={arrowIcon} alt="Back" className="alarm-log-back-icon" />
          </div>
          <span className="alarm-log-title">Alarm Log</span>
        </div>

        <div className="alarm-log-header-row">
          <h1 className="alarm-log-kpi-title">KPIs for Events</h1>
          <img src={pieIcon} alt="Pie chart" className="alarm-log-pie-icon" />
        </div>
        <p className="alarm-log-subtitle">
          Showing statistics for all assets, grouped by Code for 24 May 00:00 - 31 May 00:00 (UTC+05:30)
        </p>

        <div className="alarm-log-stats">
          <div className="alarm-log-row">
            <span className="alarm-log-label">Total Events:</span>
            <span className="alarm-log-value">88110</span>
          </div>
          <div className="alarm-log-row">
            <span className="alarm-log-label">Total Duration:</span>
            <span className="alarm-log-value">35,938:45:31</span>
          </div>
          <div className="alarm-log-row">
            <span className="alarm-log-label">MTBA (Mean Time Between Alarms):</span>
            <span className="alarm-log-value">0:00:07</span>
          </div>
          <div className="alarm-log-row">
            <span className="alarm-log-label">MAAT (Mean Active Alarm Time):</span>
            <span className="alarm-log-value">0:24:28</span>
          </div>
          <div className="alarm-log-row">
            <span className="alarm-log-label">Most Frequent:</span>
            <span className="alarm-log-value">10620 (12.05%)</span>
          </div>
          <div className="alarm-log-annotation">
            <span>999 - Local communication failure</span>
          </div>
          <div className="alarm-log-row">
            <span className="alarm-log-label">Longest Duration:</span>
            <span className="alarm-log-value">15,441:03:00 (1.26%)</span>
          </div>
          <div className="alarm-log-annotation">
            <span>6007 - Yaw sensor stop</span>
          </div>
        </div>
      </div>
    </div>
  );
}
