import React, { useState } from 'react';
import { Link } from "gatsby"
import { slide as Menu, stack } from 'react-burger-menu'

const Header = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  <header className="header">
    <Menu isOpen={menuIsOpen} Animation={stack} right={true} >
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <a className="menu-item--small" href="">Settings</a>
    </Menu>
    <div className="header-menu-btn" onClick={() => setMenuIsOpen(true)}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_menu_btn)"/>
                <rect x="12" y="15" width="16" height="1.28" rx="0.639999" fill="white"/>
                <rect x="12" y="19.5903" width="16" height="1.28" rx="0.639999" fill="white"/>
                <rect x="17.3334" y="24.1807" width="10.6666" height="1.28" rx="0.639999" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear_menu_btn" x1="0" y1="0" x2="42.7901" y2="3.89986" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE9417"/>
                <stop offset="1" stop-color="#F56233"/>
                </linearGradient>
                </defs>
              </svg>
            </div>
  </header>
}

export default Header