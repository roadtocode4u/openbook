import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer/Footer';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path='/signup' element={<Signup/>} />
   <Route path='/login' element={<Login/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
