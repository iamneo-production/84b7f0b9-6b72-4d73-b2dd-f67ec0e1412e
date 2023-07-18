import React from 'react';
import './navbar.css'
import { Outlet, Link ,useNavigate, redirect } from "react-router-dom";


function Navbar() {
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault(); 
    navigate("/login");
  };
  const HomeClick = (e) => {
    e.preventDefault(); 
    navigate("/");
  };
  const AboutClick = (e) => {
    e.preventDefault(); 
    navigate("/about");
  };
  const ContactClick = (e) => {
    e.preventDefault(); 
    navigate("/contact");
  };
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" onClick={HomeClick}>KDS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse cont" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" onClick={HomeClick}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={AboutClick}>About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" onClick={ContactClick}>Contact</a>
        </li>
      </ul>
      <div>
      <button type="submit" id="butt-inner" onClick={handleSubmit}>Log In</button>
      </div>
     
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}

export default Navbar