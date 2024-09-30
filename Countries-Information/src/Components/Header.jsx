import React from 'react';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
            <a href='/'>Where is the world?</a>
        </h2>
        <p className="theme-changer"><i className="fa-regular fa-moon">&nbsp;&nbsp;Dark Mode</i></p>
      </div>
    </header>
  )
}

export default Header;
