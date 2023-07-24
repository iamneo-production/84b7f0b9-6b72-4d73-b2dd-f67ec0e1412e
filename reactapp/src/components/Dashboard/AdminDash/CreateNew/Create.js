import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './create.css';
import { Outlet, Link ,useNavigate, redirect } from "react-router-dom";
import Analysis from '../Analysis/Analysis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';



const CreateNew = () => {

    const [orderItems, setOrderItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const navigate = useNavigate();
    const username = 'monish';
    const password = '862003';
    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

    const headers = {
      'Authorization': authHeader,
      'Content-Type': 'application/json',
    };
    

    const orderCreate =  async (e) => {
      e.preventDefault();
      // console.log(orderItems);
      var size = Object.keys(orderItems).length;
      // console.log(size);
      let ordername = orderItems[0];
      for(let i=1; i < size ; i++){
          ordername = ordername+","+(orderItems[i]);
      }
      // console.log(ordername);
      const order = {"ordername":ordername};
      const res = await axios.post("http://localhost:8080/dash/neworder",order,{headers});
      // console.log(res.data);
      toast.success("Order created Succesfully!",{
        theme:"light",
      });
    }

    const newOrder = async (e) => {
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
  const DashClick = (e) => {
    e.preventDefault(); 
    navigate("/admin/dash");
  };
  const AnalysisClick = (e) => {
    e.preventDefault(); 
    navigate("/admin/analysis");
  };
  const MenuClick = (e) => {
    e.preventDefault(); 
    navigate("/admin/menu");
  };
  const FeedbackClick = (e) => {
    e.preventDefault(); 
    navigate("/admin/feedback");
  };
  
    const handleInputChange = (event) => {
      setNewItem(event.target.value);
    };
  
    const handleAddItem = () => {
      if (newItem.trim() !== '') {
        setOrderItems((prevItems) => [...prevItems, newItem]);
        setNewItem('');
      }
    }

    const handleDeleteItem = (index) => {
        setOrderItems((prevItems) => {
          const updatedItems = [...prevItems];
          updatedItems.splice(index, 1);
          return updatedItems;
        });
      };

  return (
    <div className='full-page-new'>
      <ToastContainer />
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
      <div className="row row-add">
        <div className="col-md-2 bg-dark text-light sidebar">
          <div>
          <h1><center>Admin</center></h1>
          <h2><center>Dashboard</center></h2>
          <ul className="list-unstyled" >
            <li>
              <a href="#dashboard" onClick={DashClick}>Orders</a>
            </li>
            <li  style={{backgroundColor:'wheat'}}>
              <a href="#neworder" style={{color:'black',fontWeight:'bolder',fontSize:'x-large'}}>New Order</a>
            </li>
            <li>
              <a href="#products" onClick={MenuClick}>Menu</a>
            </li>
            {/* <li>
              <a href="#orders" onClick={AnalysisClick}>Analysis</a>
            </li> */}
            <li>
              <a  onClick={FeedbackClick} >Feedback</a>
            </li>
          </ul>
            </div>
            <button className='btn btn-danger' onClick={handleClick}><b>log out</b></button>
        </div>
        <div className="col-2 test">
        </div>
        <div className="col-10 content-add">
          <div className="container-add">
          <div className="food-order-container">
      <h2 className="food-order-title">Food Order</h2>
      <div className="input-container">
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          placeholder="Enter food item"
          className="input-field"
        />
        <button onClick={handleAddItem} className="add-button">
          Add Item
        </button>
      </div>
      <ul className="order-list">
        {orderItems.map((item, index) => (
          <li key={index} className="order-item">
            {item}
            <button
              onClick={() => handleDeleteItem(index)}
              className="delete-button"
            ></button>
          </li>
        ))}
      </ul>
      <div className='create-butt'>
      <button className='btn btn-primary' onClick={orderCreate}>Add Order</button>
      <button className='btn btn-danger' onClick={newOrder}>New Order</button>
      </div>
    </div>
        </div>
      </div> 
      </div>
    </div>
    </div>
  );
};


export default CreateNew 
