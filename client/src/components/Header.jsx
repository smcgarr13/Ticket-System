// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaSearch, FaFacebookSquare } from "react-icons/fa";
// import '../index.css';
// import './assets/randys-booth-logo.png';

// function Header() {
//   return (
//     <header>
//       <div id="search-bar">
//         <ul>
//           <li><Link to="/about">ABOUT US</Link></li>
//           <li><Link to="/blog">BLOG</Link></li>
//           <li><Link to="/search"><FaSearch />SEARCH</Link></li>
//           <li><a href="https://www.facebook.com/people/Randys-Booth-Co-Inc/100060608577098/"><FaFacebookSquare /></a></li>
//         </ul>
//       </div>
//       <nav>
//         {/* <img src="/assets/randys-booth-logo.png" alt="Randy's Booth Co Logo" /> */}
//         <img src="./assets/randys-booth-logo.png" alt="Randy's Booth Co Logo" />

//         <ul>
//           <li><Link to="/">HOME</Link></li>
//           <li><Link to="/projects">PROJECTS</Link></li>
//           <li><Link to="/inventory">INVENTORY</Link></li>
//           <li><Link to="/login">LOG IN</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;



/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { FaSearch, FaFacebookSquare } from "react-icons/fa";
import '../index.css';
import logo from './assets/randys-booth-logo.png';

function Header() {
  return (
    <header>
      <div id="search-bar">
        <ul>
          <li><a href="https://randysboothco.com/about-us/">ABOUT US</a></li>
          <li><a href="https://randysboothco.com/blog/">BLOG</a></li>
          <li><a href="#SEARCH"><FaSearch />SEARCH</a></li>
          <li><a href="https://www.facebook.com/people/Randys-Booth-Co-Inc/100060608577098/"><FaFacebookSquare /></a></li>
        </ul>
      </div>
      <nav>
        {/* <img src="/assets/randys-booth-logo.png" alt="Randy's Booth Co Logo" /> */}
        {/* <img src="./assets/randys-booth-logo.png" alt="Randy's Booth Co Logo" /> */}
        <img src={logo} alt="Randy's Booth Co Logo" />

        <ul>
          {/* <li><a href="https://randysboothco.com/">HOME</a></li> */}
          <li><a href="/home">HOME</a></li>
          {/* <li><a href="/projects">PROJECTS</a></li>
          <li><a href="/inventory-landing">INVENTORY</a></li> */}
          {/* <li><a href="/questionForm">QUESTION</a></li>
          <li><a href="/commentForm">COMMENT</a></li> */}
          <li><a href="/user">USER</a></li>
          <li><a href="/checkout">CHECKOUT</a></li>
          <li><a href="/login">LOG IN</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;