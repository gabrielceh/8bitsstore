import React from 'react';

const Hamburger = ({ active, onActive, offActive }) => {
  const handleClick = (e) => {
    if (active) {
      offActive();
    } else {
      onActive();
    }
  };

  return (
    <div
      className={'hamburger hamburger--emphatic ' + (active && 'is-active')}
      type="button"
      onClick={handleClick}
    >
      <div className="hamburger-box">
        <div className="hamburger-inner"></div>
      </div>
    </div>
  );
};

export default Hamburger;
