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
    <span
      className={'hamburger hamburger--emphatic ' + (active && 'is-active')}
      type="button"
      onClick={handleClick}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </span>
  );
};

export default Hamburger;
