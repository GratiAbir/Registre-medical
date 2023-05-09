import React from 'react';
import NavBar from '../NavBar/NavBar';

import SideBar from '../SideBar/SideBar';
import './Home.css'

const Home = () => {
    return(
        <div className='home'>
            <SideBar/>
            <div className='homeContainer'>
                <NavBar/>
                home
            </div>
        </div>
    )
}
export default Home;