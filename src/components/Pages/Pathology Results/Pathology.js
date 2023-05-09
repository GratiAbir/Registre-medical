import React from 'react';
import './Pathology.css';
import SideBar from '../../SideBar/SideBar';
import NavBar from '../../NavBar/NavBar';
import DataTable from './DataTable/DataTable';


function Pathology(){
    return(
        <div className='main-pathology'>
            <SideBar/>
            <div className='pathology-contain'>
                <NavBar/>
                <div>
                    <p id='P'>Pathology Results</p>
                    <div className='Path'>
                        <DataTable/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Pathology