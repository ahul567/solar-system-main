import React from 'react';
import './footer_icon.css';
import VectorHome from './assets/Vector_home.svg';
import CycleChart from './assets/Vector4.svg';
import World from './assets/Vector2.svg';
import Setting from './assets/Vector3.svg';

const items = [
  { label: 'Home', icon: VectorHome, alt: 'Home icon' },
  { label: 'Planets', icon: CycleChart, alt: 'Planets icon' },
  { label: 'Map', icon: World, alt: 'Map icon' },
  { label: 'Settings', icon: Setting, alt: 'Settings icon' },
];

export default function FooterIcon() {
  return (
    <footer className="footer-icon">
      <div className="footer-icon__inner">
        {items.map((item) => (
          <button key={item.label} className="footer-icon__button" type="button">
            <img className="footer-icon__image" src={item.icon} alt={item.alt} />
            <span className="footer-icon__label">{item.label}</span>
          </button>
        ))}
      </div>
    </footer>
  );
}
