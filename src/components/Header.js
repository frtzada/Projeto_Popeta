import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Meu Projeto</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

function Header() {
  return (
    <header className="header">
      <h1>Meu Projeto</h1>
    </header>
  );
}

export default Header;
