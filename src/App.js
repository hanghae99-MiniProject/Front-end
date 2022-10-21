import React from 'react';
import Router from './shared/Router';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'

const App = () => {
  return <>
  <Header />;
  <Router />;
  <Footer />;
  </>
};

export default App;
