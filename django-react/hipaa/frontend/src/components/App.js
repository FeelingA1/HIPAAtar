
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar"
import Goals from "./Goals"
import Messages from "./Messages"
import Portfolio from "./Portfolio"
import Quizzes from "./Quizzes"
import Tips from "./Tips"
import Groups from "./Groups"
import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from "../store";

class App extends Component{
  render(){ 
    return( 
      <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
        <Route path='' element={<Portfolio/>}></Route>
        <Route path='/groups' element={<Groups/>}></Route>
        <Route path='/goals' element={<Goals/>}></Route>
        <Route path='/messages' element={<Messages/>}></Route>
        <Route path='/quizzes' element={<Quizzes/>}></Route>
        <Route path='/tips' element={<Tips/>}></Route>
      </Routes>
    </Router>
    </Provider>
    )
  }
}

export default App;