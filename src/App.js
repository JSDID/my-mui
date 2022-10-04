import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';

import React, { Component } from 'react'
import Menu from './Menu/Menu';
import Header from './Header/Header';
import Main from './Main/Main';

export default class App extends Component {
  render() {
    return (
     <>
      <Menu/>
      <Header/>
      <Main/>
     </>
    )
  }
}

