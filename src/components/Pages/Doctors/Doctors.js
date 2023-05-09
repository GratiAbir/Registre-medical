import React from 'react';
import './Doctors.css';
import SideBar from '../../SideBar/SideBar';
import NavBar from '../../NavBar/NavBar';
import GridView from './GridView/GridView';

function Doctors(){

    const doctors = [
        {          
          name: 'Dr. John Smith',
          image: "https://thumbs.dreamstime.com/b/doctor-avatar-icon-white-coat-flat-design-face-illustration-senior-consultant-medicine-153396251.jpg",
          speciality: 'Cardiologist',
          buttons: ['Chat', 'Book'],
        },
        {
          name: 'Dr. Jane Doe',
          image: "https://thumbs.dreamstime.com/b/doctor-avatar-icon-white-coat-flat-design-face-illustration-senior-consultant-medicine-153396251.jpg",
          speciality: 'Dermatologist',
          buttons: ['Chat', 'Book'],
        },
        {
          name: 'Dr. Michael Johnson',
          image: "https://thumbs.dreamstime.com/b/doctor-avatar-icon-white-coat-flat-design-face-illustration-senior-consultant-medicine-153396251.jpg",
          speciality: 'Neurologist',
          buttons: ['Chat', 'Book'],
        },   
        {
            name: 'Dr. John Smith',
            image: "https://thumbs.dreamstime.com/b/doctor-avatar-icon-white-coat-flat-design-face-illustration-senior-consultant-medicine-153396251.jpg",
            speciality: 'Cardiologist',
            buttons: ['Chat', 'Book'],
          },
          {
            name: 'Dr. Jane Doe',
            image: "https://thumbs.dreamstime.com/b/doctor-avatar-icon-white-coat-flat-design-face-illustration-senior-consultant-medicine-153396251.jpg",
            speciality: 'Dermatologist',
            buttons: ['Chat', 'Book'],
          },
          {
            name: 'Dr. Michael Johnson',
            image: "https://thumbs.dreamstime.com/b/doctor-avatar-icon-white-coat-flat-design-face-illustration-senior-consultant-medicine-153396251.jpg",
            speciality: 'Neurologist',
            buttons: ['Chat', 'Book'],
          }, 
          {
            name: 'Dr. Michael Johnson',
            image: "https://thumbs.dreamstime.com/b/doctor-avatar-icon-white-coat-flat-design-face-illustration-senior-consultant-medicine-153396251.jpg",
            speciality: 'Cardiologist',
            buttons: ['Chat', 'Book'],
          }, 
          {
            name: 'Dr. Michael Johnson',
            image: "https://thumbs.dreamstime.com/b/doctor-avatar-icon-white-coat-flat-design-face-illustration-senior-consultant-medicine-153396251.jpg",
            speciality: 'Neurologist',
            buttons: ['Chat', 'Book'],
          },   
          {
              name: 'Dr. John Smith',
              image: "https://thumbs.dreamstime.com/b/doctor-avatar-icon-white-coat-flat-design-face-illustration-senior-consultant-medicine-153396251.jpg",
              speciality: 'Dermatologist',
              buttons: ['Chat', 'Book'],
            },
            {
              name: 'Dr. Jane Doe',              
              image: "https://thumbs.dreamstime.com/b/doctor-avatar-icon-white-coat-flat-design-face-illustration-senior-consultant-medicine-153396251.jpg",
              speciality: 'Neurologist',
              buttons: ['Chat', 'Book'],
            },
            {
              name: 'Dr. Michael Johnson',
              image: "https://thumbs.dreamstime.com/b/doctor-avatar-icon-white-coat-flat-design-face-illustration-senior-consultant-medicine-153396251.jpg",
              speciality: 'Cardiologist',
              buttons: ['Chat', 'Book'],
            }, 
            {
              name: 'Dr. Jane Doe',
              image: "https://thumbs.dreamstime.com/b/doctor-avatar-icon-white-coat-flat-design-face-illustration-senior-consultant-medicine-153396251.jpg",
              speciality: 'Dermatologist',
              buttons: ['Chat', 'Book'],
            },   
            {
                name: 'Dr. Michael Johnson',
                image: "https://thumbs.dreamstime.com/b/doctor-avatar-icon-white-coat-flat-design-face-illustration-senior-consultant-medicine-153396251.jpg",
                speciality: 'Neurologist',
                buttons: ['Chat', 'Book'],
              },             
      ];

    return(
        <div className='main-doctors'>
            <SideBar/>
            <div className='doctors-contain'>
                <NavBar/>
                <div>
                    <p id='D'>Doctors</p>
                    <div className='Doc'>
                        <GridView items={doctors} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Doctors