import React from 'react';
import './NavBar.css';
import {FaSistrix, FaRegBell} from 'react-icons/fa' ;
import profile from '../images/profile.png'

function NavBar(){
    return(
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <FaSistrix id='sear'/>
                    <input id = 'inp' type='text' placeholder='Search pathology results'/>
                    
                </div>
                <div className='together'>
                    <div className='item'>
                    <div className='counter'>3</div>
                        <FaRegBell/>
                        
                    </div>
                    <div className='imag'>
                        <img src={profile} alt='image' className='uchiha'/>
                    </div>
                    <p id='nom'>Username<br/> PATIENT</p>
                </div>
                
            </div>
        </div>
    )
}
export default NavBar