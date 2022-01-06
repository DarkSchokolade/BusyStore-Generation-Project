import React, { useState } from 'react';
import '../css/navbar.css';

function Navbar() {
  const [isActive, setActive] = useState('false');
  const [openBurger, setOpenBurger] = useState('false');

  const handleClick = () => {
    setActive(!isActive);
    setOpenBurger(!openBurger);
  };

  return (
    <div>
      <nav>
        <div className="container">
          <h1>
            <span>Busy</span> Store
          </h1>

          <div className="menu">
            <a href="/home" className="is-active">
              Home
            </a>
            <a href="/cart">Cart</a>
            <a href="/account">Account</a>
          </div>

          <button
            className={`hamburger ${!openBurger ? 'is-active' : ''}`}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        {!openBurger && (
          <div className="mobile-menu">
            <a href="/home" className="is-active">
              Home
            </a>
            <a href="/cart">Cart</a>
            <a href="/account">Account</a>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
