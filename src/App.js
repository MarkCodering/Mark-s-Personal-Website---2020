import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Container from './components/Container';
import MainPage from './components/main_page';
import Header from './components/header';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <MainPage />
      </Container>
      )
  }
}

export default App;
