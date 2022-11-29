import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Course from './views/Course/Course';
import StudyMaterial from './views/StudyMaterial/StudyMaterial'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/course" element={<Course />} />
        <Route path="/studymaterial-add" element={<StudyMaterial/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
