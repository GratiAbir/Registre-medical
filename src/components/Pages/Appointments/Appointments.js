import React from 'react';
import './Appointments.css';
import SideBar from '../../SideBar/SideBar';
import NavBar from '../../NavBar/NavBar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function Appointments() {
  const localizer = momentLocalizer(moment);

  const events = [
    {
      start: new Date(),
      end: new Date(moment().add(1, 'hours')),
      title: 'Meeting'
    },
    {
      start: new Date(moment().add(2, 'days')),
      end: new Date(moment().add(2, 'days').add(1, 'hours')),
      title: 'Appointment'
    }
  ];

  return (
    <div className='main-appoint'>
      <SideBar />
      <div className='appoint-contain'>
        <NavBar />
        <div>
          <p id='A'>Appointments</p>
          <div className='Appoint'>
            
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 450 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointments;
