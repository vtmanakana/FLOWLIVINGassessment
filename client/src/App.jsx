import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Login from './pages/Login';
//import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        
       
      </Routes>
    </BrowserRouter>
  );
}
