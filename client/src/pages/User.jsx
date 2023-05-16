import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.jsx';
import '../../../src/index.css';
import '../assets/randys-booth-logo.png'

function Home({ children }) { 
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Randy's Booth Co</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default Home;
