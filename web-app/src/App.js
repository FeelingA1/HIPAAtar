import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Goals from "./pages/Goals"
import Messages from "./pages/Messages"
import Portfolio from "./pages/Portfolio"
import Quizzes from "./pages/Quizzes"
import Tips from "./pages/Tips"
import Groups from "./pages/Groups"
import CommunicationTip from "./pages/Tips/CommunicationTip"
import MentalTip from "./pages/Tips/MentalTip"
import SleepTip from "./pages/Tips/SleepTip"
import UseTip from "./pages/Tips/UseTip"
import DietTip from "./pages/Tips/DietTip"
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
        <Route path='/communicationTip' element={<CommunicationTip/>}></Route>
        <Route path='/mentalTip' element={<MentalTip/>}></Route>
        <Route path='/sleepTip' element={<SleepTip/>}></Route>
        <Route path='/useTip' element={<UseTip/>}></Route>
        <Route path='/dietTip' element={<DietTip/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;