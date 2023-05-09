import React, {useState} from 'react';
import './Settings.css';
import SideBar from '../../SideBar/SideBar';
import NavBar from '../../NavBar/NavBar';
import { FaAngleRight } from "react-icons/fa";
import Image from '../../image/image';


function Settings(){
    const [Fval,setFval]= useState("");
    const [Lval,setLval]= useState("");
    const [emailval,setemailval]= useState("");
    const [Tval,setTval]= useState("");

    const handlesubmit=(event)=>{
      event.preventDefault();
    }


    return(
        <div className='main-settings'>
            <SideBar/>
            <div className='settings-contain'>
                <NavBar/>
                <div>
                    <p id='S'>Settings</p>
                    <div className='Set'>
                        <div className='Sett'>
                            <div className='image-file '>
                                <Image />
                            </div>
                            <div className='RightSet'>
                                <p id='N'>Account Details</p>
                                <form onSubmit={handlesubmit}>
                                    <label id='lab' for='First'>First Name</label>
                                        <input className='f' placeholder='first name' type='text' value={Fval} 
                                        onChange={(e)=>{setFval(e.target.value)}} id='First'/>
                                    <label id='lab' for='Last'>Last Name</label>
                                        <input className='l' placeholder='last name' type='text' value={Lval} 
                                        onChange={(e)=>{setLval(e.target.value)}} id='Last'/>
                                    <label id='lab' for='mail'>Email</label>
                                        <input className='e' placeholder='username@gmail.com' type='email' value={emailval}
                                        onChange={(e)=>{setemailval(e.target.value)}} id='mail'/>
                                    <label id='lab' for='typeA'>Account Type</label>
                                        <input className='t' placeholder='Patient Or Doctor' type='text' value={Tval}
                                        onChange={(e)=>{setTval(e.target.value)}} id='typeA'/>
                                    <button type='submit' id="butt" >SAVE NEW CHANGES</button>
                                </form>
                            </div>
                        </div>
                        <div className='FooterSet'>
                            <hr/>
                            <div className='FooterSett'>
                                <p id='sec'>Security</p>
                                <FaAngleRight/>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Settings