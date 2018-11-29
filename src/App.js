import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Content} from './components/Content'
import {Toggle} from './components/Toggle'

const BOOKS_URL ="https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"

class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}



export default App;
