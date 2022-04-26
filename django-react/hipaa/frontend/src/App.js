import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component{
  render(){ 
    return( 
    <p>TEST</p>
    )
  }
}
export default App
ReactDOM.render(<App />, document.getElementById('app'));