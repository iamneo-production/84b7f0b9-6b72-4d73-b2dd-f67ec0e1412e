import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css';
import { Outlet, Link ,useNavigate, redirect } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); 
    navigate("/");
  };
  const NewOrderClick = (e) => {
    e.preventDefault(); 
    navigate("/neworder");
  };
  const AnalysisClick = (e) => {
    e.preventDefault(); 
    navigate("/analysis");
  };

  return (
    <div className='full-page-dash'>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-dark text-light sidebar">
          <div>
          <h2><center>Dashboard</center></h2>
          <ul className="list-unstyled" >
            <li style={{backgroundColor:'wheat'}}>
              <a href="#dashboard"style={{color:'black',fontWeight:'bolder',fontSize:'x-large'}}>Orders</a>
            </li>
            <li>
              <a onClick={NewOrderClick}>New Order</a>
            </li>
            <li>
              <a href="#products">Menu</a>
            </li>
            <li>
              <a  onClick={AnalysisClick} href="#orders">Analysis</a>
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
              <h1 style={{color:'lightgreen',textShadow:'2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000, 1px 1px #000000, -1px -1px #000000, 1px -1px #fff, -1px 1px #000000'}}>Orders</h1>
              <ul>
                <li>
                  <h3><center>Order #1</center></h3>
                  <ul>
                    <li>Chicken Biryani</li>
                    <li>Sprite</li>
                  </ul>
                  <div className='butt-dash'>
                  <button className='btn btn-danger m-3'>Delete</button>
                  </div>
                  <pre> </pre>
                </li>
                <li>
                  <h3><center>Order #1</center></h3>
                  <ul>
                    <li>Chicken Biryani</li>
                    <li>Sprite</li>
                    <li>Sprite</li>
                    <li>Sprite</li>
                    <li>Sprite</li> 
                  </ul>
                  <div className='butt-dash'>
                  <button className='btn btn-danger m-3'>Delete</button>
                  </div>
                  <pre> </pre>
                </li>
                <li>
                  <h3><center>Order #1</center></h3>
                  <ul>
                    <li>Chicken Biryani</li>
                    <li>Sprite</li>
                  </ul>
                  <div className='butt-dash'>
                  <button className='btn btn-danger m-3'>Delete</button>
                  </div>
                  <pre> </pre>
                </li>
                <li>
                  <h3><center>Order #1</center></h3>
                  <ul>
                    <li>Chicken Biryani</li>
                    <li>Chicken Biryani</li>
                    <li>Sprite</li>
                  </ul>
                  <div className='butt-dash'>
                  <button className='btn btn-danger m-3'>Delete</button>
                  </div>
                  <pre> </pre>
                </li>
                <li>
                  <h3><center>Order #1</center></h3>
                  <ul>
                    <li>Chicken Biryani</li>
                    <li>Sprite</li>
                  </ul>
                  <div className='butt-dash'>
                  <button className='btn btn-danger m-3'>Delete</button>
                  </div>
                  <pre> </pre>
                </li>
                <li>
                  <h3><center>Order #1</center></h3>
                  <ul>
                    <li>Chicken Biryani</li>
                    <li>Sprite</li>
                  </ul>
                  <div className='butt-dash'>
                  <button className='btn btn-danger m-3'>Delete</button>
                  </div>
                  <pre> </pre>
                </li>
                <li>
                  <h3><center>Order #1</center></h3>
                  <ul>
                    <li>Chicken Biryani</li>
                    <li>Sprite</li>
                    <li>Sprite</li>
                    <li>Sprite</li>
                    <li>Sprite</li>
                    <li>Sprite</li>
                  </ul>
                  <div className='butt-dash'>
                  <button className='btn btn-danger m-3'>Delete</button>
                  </div>
                  <pre> </pre>
                </li>
                <li>
                  <h3><center>Order #1</center></h3>
                  <ul>
                    <li>Chicken Biryani</li>
                    <li>Sprite</li>
                  </ul>
                  <div className='butt-dash'>
                  <button className='btn btn-danger m-3'>Delete</button>
                  </div>
                  <pre> </pre>
                </li>
                <li>
                  <h3><center>Order #1</center></h3>
                  <ul>
                    <li>Chicken Biryani</li>
                    <li>Sprite</li>
                    <li>Sprite</li>
                    <li>Sprite</li>
                    <li>Sprite</li>
                  </ul>
                  <div className='butt-dash'>
                  <button className='btn btn-danger m-3'>Delete</button>
                  </div>
                  <pre> </pre>
                </li>
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

export default Dashboard;
