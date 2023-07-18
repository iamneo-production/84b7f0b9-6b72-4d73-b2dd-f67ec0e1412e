import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './create.css';
import { Outlet, Link ,useNavigate, redirect } from "react-router-dom";
import Analysis from '../Analysis/Analysis';


const CreateNew = () => {

    const [orderItems, setOrderItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); 
    navigate("/");
  };
  const DashClick = (e) => {
    e.preventDefault(); 
    navigate("/FOHdash");
  };
  const AnalysisClick = (e) => {
    e.preventDefault(); 
    navigate("/analysis");
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
    <div className="container-fluid">
      <div className="row row-add">
        <div className="col-md-2 bg-dark text-light sidebar">
          <div>
          <h2><center>Dashboard</center></h2>
          <ul className="list-unstyled" >
            <li>
              <a href="#dashboard" onClick={DashClick}>Orders</a>
            </li>
            <li  style={{backgroundColor:'wheat'}}>
              <a href="#neworder" style={{color:'black',fontWeight:'bolder',fontSize:'x-large'}}>New Order</a>
            </li>
            <li>
              <a href="#products">Menu</a>
            </li>
            <li>
              <a href="#orders" onClick={AnalysisClick}>Analysis</a>
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
      <button className='btn btn-primary'>Add Order</button>
    </div>
        </div>
      </div> 
      </div>
    </div>
    </div>
  );
};


export default CreateNew 
