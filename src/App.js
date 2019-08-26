import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import './assests/css/header.css';

function App() {
  return (
    <div className="super-container">
      <Header />
      <Home />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
