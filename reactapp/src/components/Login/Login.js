import React, { useEffect, useState } from 'react';
import './login.css';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link ,useNavigate, redirect } from "react-router-dom";
import Logo from './chef-log.png'
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') === 'true');
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const username = 'monish';
    const password = '862003';
    const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

    const headers = {
      'Authorization': authHeader,
      'Content-Type': 'application/json',
    };

    const handleEmailChange = (e) =>{
      setEmail(e.target.value);
    }
    const handlePwdChange = (e) =>{
      setPwd(e.target.value);
    }

    const handleSubmit = async (e) => {
      e.preventDefault(); 
      const login = {"email": email , "pwd" : pwd};
      // console.log(login);
      const res = await axios.post("http://localhost:8080/auth/login",login,{headers});
      // console.log(res.data);

      if (res.data === "Login Successful !") {
        // const userData = await UserData(signin.username);
        // const userId = userData.data.id;
        // Cookies.set('Usernamex', signin.username);
        // Cookies.set('Useridx', userId);
        // Cookies.set('isLoggedIn', 'true');
        toast.success('Login Successful !', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        const role = (await axios.post("http://localhost:8080/auth/login/role",{"email":email},{headers})).data;
        if (role == 'FOH'){
          setTimeout(() => {
              navigate('/FOH/dash');
          }, 1500);
        } else if (role == 'KS'){
          setTimeout(() => {
              navigate('/KS/dash');
          }, 1500);
        } else if (role == "Admin"){
          setTimeout(() => {
              navigate('/admin/dash');
          }, 1500);
        }

    } else if (res.data === "Invalid Password") {
        toast.error('Invalid password!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    } else {
        toast.error('Invalid Email ID !', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    };

  return (
    <div className='outer-cont-log'>
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
                    <input type="email" id="form2Example17" class="form-control form-control-lg" value={email} onChange={handleEmailChange} required/>
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" value={pwd} onChange={handlePwdChange} pattern=".{8,}"   required title="8 characters minimum"/>
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

// import React, { useState } from "react";
// import './login.css';
// import { connect } from "react-redux";
// import { setRole } from "../../action";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link, useNavigate } from "react-router-dom";
// import Logo from "./chef-log.png";

// function Login({ setRole }) {
//   const [email, setEmail] = useState("");
//   const [pwd, setPwd] = useState("");
//   // const [role, setRole] = useState("");
//   const navigate = useNavigate();

//   const username = "monish";
//   const password = "862003";
//   const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

//   const headers = {
//     Authorization: authHeader,
//     "Content-Type": "application/json",
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handlePwdChange = (e) => {
//     setPwd(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const login = { email: email, pwd: pwd };
//     const res = await axios.post("http://localhost:8080/auth/login", login, { headers });

//     if (res.data === "Login Successful !") {
//       toast.success("Login Successful !", {
//         position: "bottom-right",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });

//       const role = (await axios.post("http://localhost:8080/auth/login/role", { email: email }, { headers })).data;
//       // setRole(role); // Dispatch the setRole action with the role data

//       if (role === "FOH") {
//         setTimeout(() => {
//           navigate("/FOH/dash");
//         }, 1500);
//       } else if (role === "KS") {
//         setTimeout(() => {
//           navigate("/KS/dash");
//         }, 1500);
//       } else if (role === "Admin") {
//         setTimeout(() => {
//           navigate("/admin/dash");
//         }, 1500);
//       }
//     } else if (res.data === "Invalid Password") {
//       toast.error("Invalid password!", {
//         position: "bottom-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     } else {
//       toast.error("Invalid Email ID !", {
//         position: "bottom-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     }
//   };

//   return (
//     <div className="outer-cont-log">
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <section className="cont-log">
//         <div className="bg-opacity-90">
//           <div className="row">
//             <div className="col">
//               <div className="card card-log" style={{ borderRadius: "1rem" }}>
//                 <div className="row">
//                   <div className="col-lg-6" id="imge">
//                     <img src={Logo} alt="login form" className="img-fluid-log" style={{ borderRadius: "1rem 0 0 1rem" }} />
//                   </div>
//                   <div className="col-lg-6 d-flex align-items-center">
//                     <div className="card-body p-lg-5 text-black">
//                       <form onSubmit={handleSubmit}>
//                         <div className="d-flex align-items-center mb-3 pb-1">
//                           <center>
//                             <span className="h1 fw-bold mb-0 span-log">SIGN IN</span>
//                           </center>
//                         </div>
//                         <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
//                           Log into your account
//                         </h5>
//                         <div className="form-outline mb-4">
//                           <input type="email" id="form2Example17" className="form-control form-control-lg" value={email} onChange={handleEmailChange} required />
//                           <label className="form-label" htmlFor="form2Example17">
//                             Email address
//                           </label>
//                         </div>
//                         <div className="form-outline mb-4">
//                           <input type="password" id="form2Example27" className="form-control form-control-lg" value={pwd} onChange={handlePwdChange} pattern=".{8,}" required title="8 characters minimum" />
//                           <label className="form-label" htmlFor="form2Example27">
//                             Password
//                           </label>
//                         </div>
//                         <div className="pt-1 mb-4">
//                           <button className="btn btn-danger btn-lg btn-block" type="submit">
//                             Login
//                           </button>
//                         </div>
//                         <a className="small text-muted" href="#!">
//                           Forgot password?
//                         </a>
//                         <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
//                           Don't have an account? <Link to="/register" style={{ color: "#393f81" }}>Register here</Link>
//                         </p>
//                         <a href="#!" className="small text-muted">
//                           Terms of use.
//                         </a>
//                         <a href="#!" className="small text-muted">
//                           Privacy policy
//                         </a>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setRole: (role) => dispatch(setRole(role)),
//   };
// };

// export default Login;
// connect(null, mapDispatchToProps)
