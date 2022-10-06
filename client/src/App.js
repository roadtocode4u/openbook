import './App.css';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path='/signup' element={<Signup/>} />
   <Route path='/login' element={<Login/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
