import React, { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import { Outlet, Link ,useNavigate, redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";


const FOHDashboard = () => {
  
  const navigate = useNavigate();
  const [order, setOrders] = useState([])
  const username = 'monish';
    const password = '862003';
    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

    const headers = {
      'Authorization': authHeader,
      'Content-Type': 'application/json',
    };

  
  const fetchData = async () => {
    const orders = await axios.get("http://localhost:8080/getAllOrders",{headers});
    // console.log(orders.data);
      setOrders(orders.data);
      // console.log(order[0]);
  }

  const refPage = async (e) => {
    e.preventDefault();
    window.location.reload();
  }


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
    navigate("/FOH/neworder");
  };
  

  const MenuClick = (e) => {
    e.preventDefault(); 
    navigate("/FOH/menu");
  };
  
  useEffect(() => {
    fetchData();
  },[])

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
          <h1><center>Front Of House</center></h1>
          <h2><center>Dashboard</center></h2>
          <ul className="list-unstyled" >
            <li style={{backgroundColor:'wheat'}}>
              <a href="#dashboard"style={{color:'black',fontWeight:'bolder',fontSize:'x-large'}}>Orders</a>
            </li>
            <li>
              <a onClick={NewOrderClick}>New Order</a>
            </li>
            <li>
              <a onClick={MenuClick}>Menu</a>
            </li>
          </ul>
            </div>
            <button className='btn btn-danger' onClick={handleClick}><b>log out</b></button>
        </div>
        <div className="col-md-2 test">
        </div>
        <div className="col-md-10 content">
          <div className="container-dash">
            <div className='banner'>
              <img src="https://gharpekhana.files.wordpress.com/2015/08/cropped-1890_1a_c_photography_restaurants___food_162.jpg" 
              className='img-fluid'/>
              <div id="orders">
                <div className="dash-ref">
              <h1 style={{color:'lightgreen',textShadow:'2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000, 1px 1px #000000, -1px -1px #000000, 1px -1px #fff, -1px 1px #000000'}}>Orders</h1>
              <i class="fa fa-refresh fa-3x" aria-hidden="true" style={{color:"crimson",textShadow:'2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000, 1px 1px #000000, -1px -1px #000000, 1px -1px #fff, -1px 1px #000000'}} onClick={refPage}></i>
              </div>
              <ul>
                {order.length > 0 && (
                  <>
                  {order.map(ord => 
                    // const items = ord.ordername.split(",");
                    // const tests = Object.assign({},items);
                    // console.log(tests);                  
                    (
                    <>
                  <li>
                    <h3 key={ord.ordid}><center>Order #{ord.ordid}</center></h3>
                    <ul>
                    {ord.ordername.split(",").map((item, index) => (
                       <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div className='butt-dash'>
                    <button className='btn btn-danger m-1' onClick={() => {axios.delete("http://localhost:8080/delOrder/"+ord.ordid,{headers});window.location.reload();}}>Delete</button>
                    </div>
                    <pre> </pre>
                  </li>
                  </>
                  ))};
                  </>
                 )}
              </ul>
            </div>
            </div>
        </div>
      </div> 
      </div>
    </div>
    </div>
  );
};

export default FOHDashboard;
