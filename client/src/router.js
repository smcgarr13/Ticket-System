import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import User from './pages/User';
import Home from './pages/Home';
import ViewAllQuestions from './pages/ViewAllQuestions';
import Checkout from './pages/Checkout';

const router = (
  <Router>
    <App>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route exact path="/ViewAllQuestions" element={<ViewAllQuestions />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </App>
  </Router>
);

export default router;
