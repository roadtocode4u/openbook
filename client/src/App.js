import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Course from './views/Course/Course';
import StudyMaterial from './views/StudyMaterial/StudyMaterial'
import ShowMaterial from './components/ShowMaterial/ShowMaterial';
import PdfViwer from './components/PdfViwer/PdfViwer'
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
        <Route path="/course-view" element={<Course />} />
        <Route path="/add-study-material" element={<StudyMaterial/>} />
        <Route path="/show-material/:url" element={<ShowMaterial/>} />
        <Route path='/show-pdf' element={<PdfViwer/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
