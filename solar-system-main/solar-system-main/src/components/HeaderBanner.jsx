import React from "react";
import arrowIcon from "../assets/Vector-arrow.svg";
import "./HeaderBanner.css";

export default function HeaderBanner() {
  return (
    <div className="header-banner">
      <div className="header-icon">
        <img src={arrowIcon} alt="back" className="header-icon-img" />
      </div>
      <div className="header-label">Rajasthan Wind Farms</div>
    </div>
  );
}
