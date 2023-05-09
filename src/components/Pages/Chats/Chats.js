import React from 'react';
import './Chats.css';
import SideBar from '../../SideBar/SideBar';
import NavBar from '../../NavBar/NavBar';
import Conversation from './Convertastion/conversation';
import Message from './Message/message';


function Chats(){

    return(
        <div className='main-chats'>
            <SideBar/>
            <div className='chats-contain'>
                <NavBar/>
                <div>
                    <p id='C'>Chats</p>
                    <div className='Chat'>
                        <div className='ChatMenu'>
                            <div className='chatMenuWrapper'>
                                <input placeholder='Search doctor or medical department' className='chatMenuInput'/>
                                <Conversation name='Dr.John Doe' image='https://th.bing.com/th/id/R.244e89de896008a99f86b15acc9a6ea1?rik=BgcjV9Ca5%2bpzmQ&riu=http%3a%2f%2fwww.soy502.com%2fsites%2fdefault%2ffiles%2fstyles%2ffull_node%2fpublic%2f2017%2fMar%2f25%2fscreen_shot_2017-03-25_at_12.09.16_p.m.png&ehk=pUEGQIAQts9lkSuXI1JP2zTh%2bOQOzn%2fogNfJuMZ9Tdg%3d&risl=&pid=ImgRaw&r=0'/>
                                <Conversation name='Dr.Michael Stwart' image='https://th.bing.com/th/id/R.2dccd776b3244753340c0d10e9d89e8d?rik=uegYhAEwMjgYlw&pid=ImgRaw&r=0'/>
                                <Conversation name='Dr.Amina Ahmed' image='https://th.bing.com/th/id/R.df3b9830ec8fe2bf76adb7832e8c55d8?rik=6FYzm2LHnIY%2bJQ&riu=http%3a%2f%2frunnersami.files.wordpress.com%2f2013%2f05%2fdoctor-02.jpg&ehk=21u0Rq36SZW9Ns4IBI%2f5Ik7jQV9KShF7%2fbmPQZt4%2fmU%3d&risl=&pid=ImgRaw&r=0'/>
                                <Conversation name='Dr. khaled' image='https://cdn.acidcow.com/pics/20180614/hot_doctors_05.jpg'/>
                                <Conversation name='Dr.Farah' image='https://th.bing.com/th/id/OIP.hlbxzmJ8AYXTIdddvBtMhQHaLH?pid=ImgDet&rs=1'/>
                            </div>
                        </div>

                        <div className='ChatBox'>
                            <div className='chatBoxWrapper'>
                                <div className='chatBoxTop'>
                                    <Message/>
                                    <Message/>
                                    <Message own={true}/>
                                    <Message/>
                                    <Message own={true}/>
                                    <Message/>
                                    <Message own={true}/>
                                    <Message own={true}/>
                                    <Message/>
                                </div>
                                <div className='chatboxBottom'>
                                    <textarea className='chatMessageInput' placeholder='Start typing here...'></textarea>
                                    <button className='chatSubmitButton'>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chats