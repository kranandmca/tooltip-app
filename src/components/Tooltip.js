import React, { useState } from 'react';
import '../styles/Tooltip.css';
const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showToolTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 300);
  };

  const hideToolTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className='tooltip-container'
      onMouseEnter={showToolTip}
      onMouseLeave={hideToolTip}
    >
      {props.children}
      {active && (
        <div className={`tooltip ${props.direction || 'top'}`}>
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
