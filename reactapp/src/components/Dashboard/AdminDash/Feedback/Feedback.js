import React, { useEffect, useState } from "react"
import './feedback.css';
import { ToastContainer, toast } from 'react-toastify';
import { Outlet, Link ,useNavigate, redirect } from "react-router-dom";
import { Form, Button, Alert } from 'react-bootstrap';
import axios from "axios";




function Feedback() {
  const navigate = useNavigate();
  const [feeds, setFeeds] = useState([])
  

  const fetchData = () => {
    axios.get("http://localhost:8081/feedback/getFeeds").then(response => {
      setFeeds(response.data)
    })
  }

  const refPage = async (e) => {
    e.preventDefault();
    window.location.reload();
  }

  useEffect(() => {
    fetchData()
  }, [])
    

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
      const AnalysisClick = (e) => {
        e.preventDefault(); 
        navigate("/admin/analysis");
      };
      const DashClick = (e) => {
        e.preventDefault(); 
        navigate("/admin/dash");
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
            <li >
              <a onClick={MenuClick}>Menu</a>
            </li>
            {/* <li>
              <a  onClick={AnalysisClick} >Analysis</a>
            </li> */}
            <li style={{backgroundColor:'wheat'}}>
              <a style={{color:'black',fontWeight:'bolder',fontSize:'x-large'}}>Feedback</a>
            </li>
          </ul>
            </div>
            <button className='btn btn-danger' onClick={handleClick}><b>log out</b></button>
        </div>
        <div className="col-md-2 test">
        </div>
        <div className="col-md-10 content">
          <div className="container-feed">
          <div className="price-list-container">
          <div className="dash-ref">
        <h1>Feedback & Queries</h1>
        <i class="fa fa-refresh fa-3x" aria-hidden="true" style={{color:"crimson",textShadow:'2px 0 #000000, -2px 0 #000000, 0 2px #000000, 0 -2px #000000, 1px 1px #000000, -1px -1px #000000, 1px -1px #fff, -1px 1px #000000'}} onClick={refPage}></i>
        </div>
        <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Feedback</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody class="table_body">
                        {feeds.length > 0 && (
                            <>
                        {feeds.map(feed => (
                            <tr>
                              <td key={feed.fid}>{feed.fid}</td>
                              <td key={feed.fid}>{feed.name}</td>
                              <td key={feed.fid}>{feed.email}</td>
                              <td key={feed.fid}>{feed.message}</td>
                              <td><Button className='btn-danger' type="submit" onClick={() => {axios.delete("http://localhost:8081/feedback/delFeed/"+feed.fid);window.location.reload();}}>close</Button></td>
                              {/* <td><Button className='btn-primary' type="submit" onClick={() => navigate("/updatecase")}>Edit</Button></td> */}
                            </tr>
                        ))}
                            </>
                        )}
                        </tbody>

                    </table>
        <br></br>
        {/* <button className="update-button">Update Prices</button> */}
      </div>

          </div>
        </div> 
      </div>
    </div>
    </div>
  );
}

export default Feedback;