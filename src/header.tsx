import React from 'react';
import './header.css'; 
import "./zupee_image.png"
const Header: React.FC = () => {
  return (
    <div className='Whole-header'>
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <a href="/">
            <img src="zupee_image.png" alt="Zupee Logo" className="header-logo" />
          </a>
        </div>
        <nav className="header-right">
          <ul className="header-nav-list">
            <li className="header-nav-item"><a href="#terms">OUR GAMES</a>
              <ul className="dropdown-menu">
                <li><a href="#terms/overview">LUDO</a></li>
                <li><a href="#terms/services">LUDO SUPREME</a></li>
                <li><a href="#terms/payment">LUDO SUPREME LEAGUE</a></li>
                <li><a href="#terms/overview">LUDO TURBO</a></li>
                <li><a href="#terms/overview">LUDO NINJA</a></li>
                <li><a href="#terms/overview">SNAKES AND LADDER PLUS</a></li>
                <li><a href="#terms/overview">TRUMP CARD MANIA</a></li>
              </ul>
            </li>
            <li className="header-nav-item"><a href="#privacy">ABOUT US</a></li>
            <li className="header-nav-item"><a href="#faq">BLOG</a></li>
            <li className="header-nav-item"><a href="#contact">NEWSROOM</a></li>
            <li className="header-nav-item"><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div className='sub-header'>
      <p className='sub-header-content'>Home {'>'} Terms and conditions</p>
    </div>
    </div>
  );
};

export default Header;
