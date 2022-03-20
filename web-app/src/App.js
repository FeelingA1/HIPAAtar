import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Goals from "./pages/Goals"
import Messages from "./pages/Messages"
import Portfolio from "./pages/Portfolio"
import Quizzes from "./pages/Quizzes"
import Tips from "./pages/Tips"
import Groups from "./pages/Groups"
import MedicalTip from "./pages/Tips/MedicalTip"
import MentalTip from "./pages/Tips/MentalTip"
import SleepTip from "./pages/Tips/SleepTip"
import UseTip from "./pages/Tips/UseTip"
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
        <Route path='/medicalTip' element={<MedicalTip/>}></Route>
        <Route path='/mentalTip' element={<MentalTip/>}></Route>
        <Route path='/sleepTip' element={<SleepTip/>}></Route>
        <Route path='/useTip' element={<UseTip/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;