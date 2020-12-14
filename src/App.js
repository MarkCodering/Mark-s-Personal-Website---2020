import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from './components/Container';
import MainPage from './components/main_page';
import Header from './components/header';
import Footer from './components/Footer';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <MainPage />
        <Footer />
      </Container>
      )
  }
}

export default App;