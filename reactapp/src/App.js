import logo from './logo.svg';
import 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/AdminDash/Dashboard';
import Homepage from './components/Homepage/Homepage';
import Terms from './components/Homepage/Terms/Terms';
import AboutPage from './components/Homepage/About/About';
import ContactPage from './components/Homepage/Contact/Contact';
import CreateNew from './components/Dashboard/AdminDash/CreateNew/Create';
import Analysis from './components/Dashboard/AdminDash/Analysis/Analysis';
import Menu from './components/Dashboard/AdminDash/Menu/Menu';
import Feedback from './components/Dashboard/AdminDash/Feedback/Feedback';
import FOHDashboard from './components/Dashboard/FOHDash/Dashboard';
import FOHMenu from './components/Dashboard/FOHDash/Menu/Menu';
import FOHCreateNew from './components/Dashboard/FOHDash/CreateNew/Create';
import KSDashboard from './components/Dashboard/KSDash/Dashboard';
import KSMenu from './components/Dashboard/KSDash/Menu/Menu';

function App() {
  return (
   <BrowserRouter>
   <Routes>


    //Homepage

    <Route path='/' element={<Homepage /> }/>
    <Route path='/about' element={<AboutPage />} />
    <Route path='/contact' element={<ContactPage />} />
    <Route path='/terms' element={<Terms />} />


    //Login and Register

    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />


    //Admin

    <Route path='/admin/dash' element={<Dashboard/>} />
    <Route path='/admin/neworder' element={<CreateNew />} />
    <Route path='/admin/analysis' element={<Analysis />} />
    <Route path='/admin/menu' element={<Menu />} />
    <Route path='/admin/feedback' element={<Feedback />} />


    //FOH (Front of House)

    <Route path='/FOH/dash' element={<FOHDashboard />} />
    <Route path='/FOH/neworder' element={<FOHCreateNew />} />
    <Route path='/FOH/menu' element={<FOHMenu />} />


    //KS (Kitchen Staff)

    <Route path='/KS/dash' element={<KSDashboard />} />
    <Route path='/KS/menu' element={<KSMenu />} />

   </Routes>
   </BrowserRouter>
  );
}

export default App;