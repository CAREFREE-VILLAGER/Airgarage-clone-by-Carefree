
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './DropMenu.css';

const DropMenu = ({ title, items, subRoutes }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li className="drop-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link to={`/${subRoutes.toLowerCase()}`} className="menu-title">{title}</Link>
      {isHovered && (
        <ul className="menu-items">
          {items.map((item, index) => (
            <li key={index}><Link to={`/${subRoutes.toLowerCase()}/${item.toLowerCase()}`}>{item}</Link></li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropMenu;
