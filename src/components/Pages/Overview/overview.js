import React from 'react';
import './overview.css';
import SideBar from '../../SideBar/SideBar';
import NavBar from '../../NavBar/NavBar';
import {FaCalendarPlus, FaUserAlt,FaStethoscope} from 'react-icons/fa' ;
import CanvasJSReact from './canvasjs.react';

function Overview(){
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title:{
            text: "Hospital Survey"
        },
        axisY: {
            suffix: "%"
        },
        axisX: {
            title: "Week of Year",
            prefix: "W",
            interval: 2
        },
        data: [{
            type: "line",
            toolTipContent: "Week {x}: {y}%",
            dataPoints: [
                { x: 1, y: 64 },
                { x: 2, y: 61 },
                { x: 3, y: 64 },
                { x: 4, y: 62 },
                { x: 5, y: 64 },
                { x: 6, y: 60 },
                { x: 7, y: 58 },
                { x: 8, y: 59 },
                { x: 9, y: 53 },
                { x: 10, y: 54 },
                { x: 11, y: 61 },
                { x: 12, y: 60 },
                { x: 13, y: 55 },
                { x: 14, y: 60 },
                { x: 15, y: 56 },
                { x: 16, y: 60 },
                { x: 17, y: 59.5 },
                { x: 18, y: 63 },
                { x: 19, y: 58 },
                { x: 20, y: 54 },
                { x: 21, y: 59 },
                { x: 22, y: 64 },
                { x: 23, y: 59 }
            ]
        }]
    }

    return(
        <div className='main-overview'>
            <SideBar/>
            <div className='overview-contain'>
                <NavBar/>
                <div>
                    <p id='O'>Overview</p>
                    <div className='Over'>
                        <div className='overviewTop'>
                            <div className='overviewTop1'>
                                <FaCalendarPlus id='overIcon' />
                                <p id='top1'>Appointments<br/>213</p>
                            </div>
                            <div className='overviewTop2'>
                                <FaUserAlt id='overIcon'/>
                                <p id='top2'>New Patients<br/>213</p>
                            </div>
                            <div className='overviewTop3'>
                                <FaStethoscope id='overIcon'/>
                                <p id='top3'>Operations<br/>23</p>
                            </div>
                        </div>
                        <div className='overviewCenter'>
                            <h6></h6>
                            <CanvasJSChart options = {options}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
                
        
    )
}
export default Overview
