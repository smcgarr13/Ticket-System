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
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import Stripe from 'react-stripe-checkout'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Set up Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

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

                {/* <Route path="/checkout" element={<Elements><Checkout /></Elements>} /> */}
                {/* <Route path="/checkoutForm" element={<Elements><CheckoutForm /></Elements>} /> */}
            
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





// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Login from './pages/Login';
// import User from './pages/User';
// import Home from './pages/Home';
// import CheckoutForm from './pages/CheckoutForm';
// import styled from 'styled-components';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// // Set up Apollo Client
// const client = new ApolloClient({
//   uri: 'http://localhost:3001/graphql',
//   cache: new InMemoryCache()
// });

// // Set up Stripe
// const ProductDisplay = () => (
//   <section>
//     <div className="product">
//       <img
//         src="https://i.imgur.com/EHyR2nP.png"
//         alt="The cover of Stubborn Attachments"
//       />
//       <div className="description">
//       <h3>Stubborn Attachments</h3>
//       <h5>$20.00</h5>
//       </div>
//     </div>
//     <form action="/create-checkout-session" method="POST">
//       <button type="submit">
//         Checkout
//       </button>
//     </form>
//   </section>
// );

// const Message = ({ message }) => (
//   <section>
//     <p>{message}</p>
//   </section>
// );

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `;

// const Content = styled.div`
//   flex-grow: 1;
// `;

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Check to see if this is a redirect back from Checkout
//     const query = new URLSearchParams(window.location.search);

//     if (query.get("success")) {
//       setMessage("Order placed! You will receive an email confirmation.");
//     }

//     if (query.get("canceled")) {
//       setMessage(
//         "Order canceled -- continue to shop around and checkout when you're ready."
//       );
//     }
//   }, []);

//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <Container>
//           <Header />
//           <Content>
//             {message ? (
//               <Message message={message} />
//             ) : (
//               <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/user" element={<User />} />
//                 <Route path="/checkout" element={<CheckoutForm />} />
//                 <Route path="/" element={<Home />} />
//               </Routes>
//             )}
//           </Content>
//           <Footer />
//         </Container>
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;







// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Login from './pages/Login';
// import User from './pages/User';
// import Stripe from './pages/Stripe';
// import Home from './pages/Home';
// import styled from 'styled-components';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// // Set up Apollo Client
// const client = new ApolloClient({
//   uri: 'http://localhost:3001/graphql',
//   cache: new InMemoryCache()
// });

// // const H1 = styled.h1`
// //   color: blue;
// //   font-size: 4rem;
// // `;

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
//     <ApolloProvider client={client}>
//       <Router>
//         <Container>
//           <Header />
//           <Content>
//             <Routes>
//               <Route path="/login" element={<Login />} />
//               <Route path="/user" element={<User />} />
//               <Route path="/stripe" element={<Stripe />} />
//               <Route path="/" element={<Home />} />
//             </Routes>
//           </Content>
//           <Footer />
//         </Container>
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;


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

