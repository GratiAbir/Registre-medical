import React, {useState} from 'react';
import {useNavigate } from 'react-router-dom';
import './Logouts.css';
import SideBar from '../../SideBar/SideBar';
import NavBar from '../../NavBar/NavBar';
import logo from '../../images/logo3.svg'

function Logouts(){
    const [emailval,setemailval]= useState("");
    
    const handlesubmit=(event)=>{
        event.preventDefault();
    }

    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

    return(
        <div className='main-logouts'>
            <SideBar/>
            <div className='logouts-contain'>
                <NavBar/>
                <div>
                    <p id='L'>Logouts</p>
                    <div className='Log'>
                        <img src={logo} alt='logo' id='log-img' />
                        <form onSubmit={handlesubmit}>
                            <label id='logLabel' for='emailLog'>Email</label>
                                <input placeholder='username@gmail.com' type='email' value={emailval} 
                                onChange={(e)=>{setemailval(e.target.value)}} id='emailLog'/>
                            <button type='submit' id="log-but" onClick={handleClick}>LOGOUT</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Logouts