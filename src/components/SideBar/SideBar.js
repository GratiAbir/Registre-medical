import React, {useState} from 'react';
import './SideBar.css'
import logo from '../images/logo3.svg'
import { NavLink } from 'react-router-dom';
import {FaCommentAlt, FaEye, FaHeartbeat,FaUserMd,
    FaCalendarAlt,FaCog,FaShareSquare,FaBars,
    FaPhoneSquareAlt} from 'react-icons/fa' ;

function SideBar(){
    const[isOpen, setIsOpen]= useState(true);
    const toggle =() => setIsOpen(!isOpen);
    const menuItem=[
        {
            path:'/Overview',
            name: 'Overview',
            icon: <FaEye/>
        },
        {
            path:'/Appointments',
            name: 'Appointments',
            icon: <FaCalendarAlt/>
        },
        {
            path:'/Doctors',
            name:'Doctors',
            icon: <FaUserMd/>
        },
        {
            path:'/Pathology',
            name: 'Pathology Results',
            icon: <FaHeartbeat/>
        },
        {
            path:'/Chats',
            name: 'Chats',
            icon: <FaCommentAlt/>
        },
        {
            path:'/Settings',
            name: 'Settings',
            icon: <FaCog/>
        },
        {
            path:'/Logouts',
            name: 'Logouts',
            icon:<FaShareSquare/>
        }
    ]

    return(
        <div style={{flex: isOpen ? '1' : '0.25'}} className='sidebar'>
            <div className='top'>
                <div style={{display: isOpen ? 'block' : 'none'}} className='top-section1'>
                    <img src={logo} alt='logo' id='img-id' />
                </div>
                <div style={{display: isOpen ? 'block' : 'none'}}  className='top-section2'>
                    <p>Iwosan</p>
                </div>
                <div style={{marginLeft: isOpen ? '50px' : '20px'}} className='bars'>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            <hr/>
            <div className='center'>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className='linkk' activeclassName='active'>
                        <div className='icon'>{item.icon}</div>
                        <div style={{display: isOpen ? 'block' : 'none'}} className='link-text'>{item.name}</div>
                    </NavLink>
                ))
            }
            </div>
            <br/><br/><br/><br/><br/><br/>
            <hr/>
            <div style={{marginBottom: isOpen ? '0px' : '20px'}} className='section-bottom'>
                <div className='phone'>
                    <FaPhoneSquareAlt/>
                </div>
                <div style={{display: isOpen ? 'block' : 'none'}}  className='phone-text'>
                    <p id='text1'>Emergency Hotlines:</p>
                    <p id= 'text2'>+234 92 928 2891 +234 50 521 2098</p>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        </div>
        
    )
}
export default SideBar;