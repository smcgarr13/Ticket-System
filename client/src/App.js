import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/login';
import User from './pages/User';
import Home from './pages/home';
import styled from 'styled-components';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Set up Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

// const H1 = styled.h1`
//   color: blue;
//   font-size: 4rem;
// `;

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
    <ApolloProvider client={client}>
      <Router>
        <Container>
          <Header />
          <Content>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/user" element={<User />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Content>
          <Footer />
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;


// import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import styled from 'styled-components';

// const H1 = styled.h1`
//   color: blue;
//   font-size: 4rem;
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

// const Content = styled.div`
//   flex-grow: 1;
// `;

// function App() {
//   return (
//     <Container>
//       <Header />
//       <Content>
//         <H1>Oh, hi there! This is a test...</H1>
//       </Content>
//       <Footer />
//     </Container>
//   );
// }

// export default App;

