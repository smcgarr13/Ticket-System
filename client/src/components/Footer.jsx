import React from 'react';
import '../index.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="orange-line"></div>
      <div className="black-line"></div>
      <p align="center">Search for projects or inventory</p>
      <div className="search-input">
        <form id="search-form">
          <input type="text" className="form-control" id="search" placeholder="Name or ID *" />
          <button id="search-button">Search</button>
        </form>
      </div>
      <div className="orange-line"></div>
      <div className="black-line"></div>
    </footer>
  );
}

export default Footer;