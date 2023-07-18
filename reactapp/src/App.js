import logo from './logo.svg';
import 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/FOH_Dashboard/Dashboard';
import Homepage from './components/Homepage/Homepage';
import Terms from './components/Homepage/Terms/Terms';
import AboutPage from './components/Homepage/About/About';
import ContactPage from './components/Homepage/Contact/Contact';
import CreateNew from './components/Dashboard/FOH_Dashboard/CreateNew/Create';
import Analysis from './components/Dashboard/FOH_Dashboard/Analysis/Analysis';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Homepage /> }/>
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/FOHdash' element={<Dashboard/>} />
    <Route path='/terms' element={<Terms />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='/neworder' element={<CreateNew />} />
    <Route path='/analysis' element={<Analysis />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;