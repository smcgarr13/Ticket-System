import React from 'react';
import Header from '../src/components/Header/Header';
import Footer from './components/Footer/Footer';
import styled from 'styled-components';

const H1 = styled.h1`
  color: blue;
  font-size: 4rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <H1>Oh, hi there! This is a test...</H1>
      </Content>
      <Footer />
    </Container>
  );
}

export default App;




// import React from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from '../src/components/Header/Header';
// import Footer from '../src/components/Footer/Footer';

// // import './App.css';
// import './index.css';
// import styled from 'styled-components';

// const H1 = styled.h1`
// color: blue;
// font-size: 4rem;
// `;

// function App() {
//   return (
//     <div className="container">
//     <Header />
//     <H1>Oh, hi there!</H1>
//     <Footer />
//   </div>
// );
// }

// export default App;
