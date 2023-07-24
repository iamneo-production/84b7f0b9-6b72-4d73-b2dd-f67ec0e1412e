import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './analysis.css';
import { Outlet, Link ,useNavigate, redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Analysis = () => {
  const navigate = useNavigate();


  const DashClick = (e) => {
    e.preventDefault(); 
    navigate("/admin/dash");
  };

  const handleClick = (e) => {
    e.preventDefault(); 
    toast.error('Logged out Successfully !', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate('/');
    }, 1700);
  };
  const NewOrderClick = (e) => {
    e.preventDefault(); 
    navigate("/admin/neworder");
  };
  const MenuClick = (e) => {
    e.preventDefault(); 
    navigate("/admin/menu");
  };
  const FeedbackClick = (e) => {
    e.preventDefault(); 
    navigate("/admin/feedback");
  };

  return (
    <div className='full-page-dash-ana'>
      <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
    <div className="container-fluid">
      <div className="row row-ana">
        <div className="col-md-2 bg-dark text-light sidebar">
          <div>
          <h1><center>Admin</center></h1>
          <h2><center>Dashboard</center></h2>
          <ul className="list-unstyled" >
            <li>
              <a href="#dashboard" onClick={DashClick}>Orders</a>
            </li>
            <li>
              <a onClick={NewOrderClick}>New Order</a>
            </li>
            <li>
              <a onClick={MenuClick}>Menu</a>
            </li>
            <li style={{backgroundColor:'wheat'}}>
              <a href="#orders" style={{color:'black',fontWeight:'bolder',fontSize:'x-large'}}>Analysis</a>
            </li>
            <li>
              <a  onClick={FeedbackClick} >Feedback</a>
            </li>
          </ul>
            </div>
            <button className='btn btn-danger' onClick={handleClick}><b>log out</b></button>
        </div>
        <div className='col-2'>
        </div>
        <div className="col-10 content-ana">
          <div className="container-ana">
      <div className="dashboard-container">
        <h1>Kitchen Display System</h1><br></br>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Total Orders</h3>
            <p>Total: 100</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Menu Items</h3>
            <p>Total: 50</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Revenue</h3>
            <p>Total: INR 50000</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Customers</h3>
            <p>Total: 100</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Current Orders</h3>
            <p>Total: 10</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Pending Orders</h3>
            <p>Total: 5</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Messages</h3>
            <p>Total: 20</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Total Staff Present</h3>
            <p>Total: 30</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
          <div className="dashboard-card">
            <h3>Total Staff Absent</h3>
            <p>Total: 5</p><br></br>
            <button className="buttonStyle">Add</button>
          </div>
        </div>
      </div>
        </div>
      </div> 
      </div>
    </div>
    </div>
  );
};

export default Analysis;
