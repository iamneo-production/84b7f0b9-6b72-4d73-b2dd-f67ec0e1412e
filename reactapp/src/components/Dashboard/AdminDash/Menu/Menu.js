import React from 'react';
import './menu.css';
import { ToastContainer, toast } from 'react-toastify';
import { Outlet, Link ,useNavigate, redirect } from "react-router-dom";




function Menu() {
  const navigate = useNavigate();
  const username = 'monish';
    const password = '862003';
    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

    const headers = {
      'Authorization': authHeader,
      'Content-Type': 'application/json',
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
      const AnalysisClick = (e) => {
        e.preventDefault(); 
        navigate("/admin/analysis");
      };
      const DashClick = (e) => {
        e.preventDefault(); 
        navigate("/admin/dash");
      };
      const FeedbackClick = (e) => {
        e.preventDefault(); 
        navigate("/admin/feedback");
      };
  return (
    <div className='full-page-dash'>
    <div className="container-fluid">
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
      <div className="row">
        <div className="col-md-2 bg-dark text-light sidebar">
          <div>
          <h1><center>Admin</center></h1>
          <h2><center>Dashboard</center></h2>
          <ul className="list-unstyled" >
            <li >
              <a href="" onClick={DashClick}>Orders</a>
            </li>
            <li >
              <a onClick={NewOrderClick}>New Order</a>
            </li>
            <li style={{backgroundColor:'wheat'}}>
              <a style={{color:'black',fontWeight:'bolder',fontSize:'x-large'}}>Menu</a>
            </li>
            {/* <li>
              <a  onClick={AnalysisClick} href="#orders">Analysis</a>
            </li> */}
            <li>
              <a  onClick={FeedbackClick} >Feedback</a>
            </li>
          </ul>
            </div>
            <button className='btn btn-danger' onClick={handleClick}><b>log out</b></button>
        </div>
        <div className="col-md-2 test">
        </div>
        <div className="col-md-10 content">
          <div className="container-menu">
          <div className="price-list-container">
        <h1>Price List</h1>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chicken Biriyani</td>
              <td>INR 100</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Chicken 65</td>
              <td>INR 150</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Egg Biryani</td>
              <td>INR 90</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Empty Biriyani</td>
              <td>INR 60</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Mutton Biriyani</td>
              <td>INR 250</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Dragon Chicken</td>
              <td>INR 200</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Dragon Chicken</td>
              <td>INR 200</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Chicken Fried Rice</td>
              <td>INR 90</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Egg Fried Rice</td>
              <td>INR 90</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Non Veg Meals</td>
              <td>INR 100</td>
              <td>Non-veg</td>
            </tr>
            <tr>
              <td>Veg Meals</td>
              <td>INR 90</td>
              <td>Veg</td>
            </tr>
            <tr>
              <td>Chapathi</td>
              <td>INR 10</td>
              <td>Veg</td>
            </tr>   
            <tr>
              <td>Chicken Noodles</td>
              <td>INR 90</td>
              <td>Non-veg</td>
            </tr> 
          </tbody>
        </table><br></br>
        <button className="update-button">Update Prices</button>
      </div>

          </div>
        </div> 
      </div>
    </div>
    </div>
  );
}

export default Menu;