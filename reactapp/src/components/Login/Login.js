import React, { useEffect, useState } from 'react';
import './login.css';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link ,useNavigate, redirect } from "react-router-dom";
import Logo from './chef-log.png'


function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault(); 
      navigate("/FOhdash");
    };

  return (
    <div className='outer-cont-log'>
    <section class="cont-log">
  <div class="bg-opacity-90">
    <div class="row">
      <div class="col">
        <div class="card card-log" style={{borderRadius:"1rem"}}>
          <div class="row">
            <div class="col-lg-6" id='imge'>
              <img src={Logo}
                alt="login form" class="img-fluid-log" style={{borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div class="col-lg-6 d-flex align-items-center">
              <div class="card-body p-lg-5  text-black">

                <form onSubmit={handleSubmit}>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <center><span class="h1 fw-bold mb-0 span-log">SIGN IN</span></center>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Log into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" required/>
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" pattern=".{8,}"   required title="8 characters minimum"/>
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-danger btn-lg btn-block" type='submit'>Login</button>
                  </div>

                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style={{color:'#393f81'}}>Don't have an account? <Link to='/register'
                      style={{color:"#393f81"}}>Register here</Link></p>
                  <a href="#!" class="small text-muted">Terms of use.</a>
                  <a href="#!" class="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default Login