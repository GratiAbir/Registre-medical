import React, {useState} from 'react';
import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/logo3.svg'

function Login(){

  let navigate = useNavigate();
  const handleClick = () => {
    navigate('../Overview');
  };

  const [emailval,setemailval]= useState("");
  const [passval,setpassval]= useState("");

  const handlesubmit=(event)=>{
    event.preventDefault();
  }

  return(
    <div className='main-login'>
        
      <div className='login-contain'>
        <div className='img-class'>
          <img src={logo} alt='logo' id='img-id' />
        </div>
        <div className='header'>
          <p>LOGIN</p>
        </div>
        <form onSubmit={handlesubmit}>
          <label for='email1'>Email</label>
            <input placeholder='Enter your email...' type='email' value={emailval} 
            onChange={(e)=>{setemailval(e.target.value)}} id='email1'/>
          <label for='pwd1'>Password</label>
            <input placeholder='Enter password' type='password' value={passval}
            onChange={(e)=>{setpassval(e.target.value)}} id='pwd1'/>
            <h6><NavLink to='#' id='link'>Forgot Password?</NavLink></h6>
          <br/><br/>
          <button type='submit' id="log-butt" onClick={handleClick}>LOGIN</button>
        </form>
        <div className='footer'>
          <h5>Don't have an Account? <NavLink className='link' to='../Register'>Create an account</NavLink></h5>
        </div>
      </div>

    </div>
    ) 
}

export default Login
