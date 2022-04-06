import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Goals from "./pages/Goals"
import Messages from "./pages/Messages/Messages"
import Portfolio from "./pages/Portfolio"
import Quizzes from "./pages/Quizzes"
import Tips from "./pages/Tips"
import Groups from "./pages/Groups"
function App() {
  return (
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
  );
}

export default App;