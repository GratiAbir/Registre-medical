import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import Login from './LogIn/Login';
import Register from './Register/Register';
import Overview from './Pages/Overview/overview';
import Appointments from './Pages/Appointments/Appointments';
import Chats from './Pages/Chats/Chats';
import Doctors from './Pages/Doctors/Doctors';
import Logouts from './Pages/Logouts/Logouts';
import Pathology from './Pages/Pathology Results/Pathology';
import Settings from './Pages/Settings/Settings';
import NavBar from './NavBar/NavBar'
import Home from './Home/Home'
import SideBar from './SideBar/SideBar'
import Image from './image/image';
import DataTable from './Pages/Pathology Results/DataTable/DataTable';
import Conversation from './Pages/Chats/Convertastion/conversation';
import Message from './Pages/Chats/Message/message';

class App extends React.Component{
    render(){
        return(
            <div className='App'>
                    <BrowserRouter>
                        <Routes>
                            <Route path = "/" element ={<Login/>} />
                            <Route path="/Register" element={<Register/>} />
                            <Route path="/Overview" element={<Overview/>} />
                            <Route path="/Appointments" element={<Appointments/>} />
                            <Route path="/Chats" element={<Chats/>} />
                            <Route path="/Doctors" element={<Doctors/>} />
                            <Route path="/Logouts" element={<Logouts/>} />
                            <Route path="/Pathology" element={<Pathology/>} />
                            <Route path="/Settings" element={<Settings/>} />
                            <Route path="/NavchBar" element={<NavBar/>} />
                            <Route path="/Home" element={<Home/>} />
                            <Route path="/SideBar" element={<SideBar/>} />
                            <Route path="/Image" element={<Image/>} />
                            <Route path="/DataTable" element={<DataTable/>} />
                            <Route path="/Conversation" element={<Conversation/>} />
                            <Route path="/Message" element={<Message/>} />
                        </Routes>
                    </BrowserRouter>
            </div>
        )
    }
}
export default App