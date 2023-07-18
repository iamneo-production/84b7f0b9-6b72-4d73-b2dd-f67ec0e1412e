import React, { useEffect, useState } from 'react';
import './register.css';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link ,useNavigate, redirect } from "react-router-dom";
import Logo from './chef-reg.png';



function Register() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault(); 
      navigate("/login");
    };

  return (
    <div className='outer-cont-reg'>
    <section class="cont-reg">
  <div class="bg-opacity-90">
        <div class="card card-reg" style={{borderRadius:"1rem"}}>
          <div class="row">
            <div class="col-lg-6" id='imge'>
              <img src={Logo}
                alt="login form" class="img-fluid-reg" style={{borderRadius: "1rem 0 0 1rem"}} />
            </div>
            <div class="col-lg-6 d-flex align-items-center">
              <div class="card-body p-lg-5  text-black">

                <form onSubmit={handleSubmit}>

                  <div class="d-flex align-items-center mb-3 pb-1">
                    <center><span class="h1 fw-bold mb-0 span-reg">Register Account</span></center>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing:"1px"}}>Register your account</h5>

                  <div class="form-outline mb-4">
                    <select class="form-select" aria-label="Default select example">
                      <option value="1">FOH</option>
                      <option value="2">Kitchen Staff</option>
                    </select>
                    <label class="form-label" for="form2Example17"><b>Role</b></label>
                  </div>
                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg" required/>
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" pattern=".{8,}"   required title="8 characters minimum" />
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-danger btn-lg btn-block" type='submit'>Register</button>
                  </div>

                  {/* <a class="small text-muted" href="#!">Forgot password?</a> */}
                  <p class="mb-5 pb-lg-2" style={{color:'black'}}>Already have an account? <Link to='/login'
                      style={{color:"black"}}>Login here</Link></p>
                  <a href="/terms" class="small text-muted"><b>Terms of use.</b></a>
                  <a href="/terms" class="small text-muted"><b>Privacy policy</b></a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
 
</section>
</div>
  )
}

export default Register