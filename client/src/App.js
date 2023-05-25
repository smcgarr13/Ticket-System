import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import User from './pages/User';
import Home from './pages/Home';
import ViewAllQuestions from './pages/ViewAllQuestions';
import Checkout from './pages/Checkout';
// import CheckoutForm from './pages/CheckoutForm';
import styled from 'styled-components';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from '@apollo/client';
// import Stripe from 'react-stripe-checkout'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Set up Apollo Client
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


// const client = new ApolloClient({
//   uri: 'http://localhost:3001/graphql',
//   cache: new InMemoryCache()
// });

// Set up Stripe
const stripePromise = loadStripe
('pk_test_TYooMQauvdEDq54NiTphI7jx');

// const stripePromise = loadStripe
// // TODO: update with public key
// ('pk_test_TYooMQauvdEDq54NiTphI7jx').then(stripe => stripe);


// //OG stripe snippet to incorporate – this is old
// return (
//   <div>
//     <Stripe
//       stripeKey=""
//       token={tokenHandler}
//       />
//   </div>
// );


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
`;

function App() {
  // console.log(Header, Footer, Login, User, Home, Checkout, CheckoutForm);

  return (
    <ApolloProvider client={client}>
      <Elements stripe={stripePromise}>
        <Router>
          <Container>
            <Header />
            <Content>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<User />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route exact path="/ViewAllQuestions" element={<ViewAllQuestions />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/signup" element={<SignUp /> } />
            
              </Routes>
            </Content>
            <Footer />
          </Container>
        </Router>
      </Elements>
    </ApolloProvider>
  );
}

export default App;
