import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sidebar-container">
      <div className="nav-header">
        <h1 className="logo">Anna_Uspenskaya</h1>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className={`menu ${isOpen ? 'show' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>HOME</a>
        <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
      </div>
    </nav>
  );
};

export default NavBar;