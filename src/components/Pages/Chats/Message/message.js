import React from 'react';
import './message.css';

function Message({own}){
    return(
        <div className={ own ? "message own" : "message"}>
            <div className='messageTop'>
                <img className='messageImg'
                src="https://th.bing.com/th/id/R.244e89de896008a99f86b15acc9a6ea1?rik=BgcjV9Ca5%2bpzmQ&riu=http%3a%2f%2fwww.soy502.com%2fsites%2fdefault%2ffiles%2fstyles%2ffull_node%2fpublic%2f2017%2fMar%2f25%2fscreen_shot_2017-03-25_at_12.09.16_p.m.png&ehk=pUEGQIAQts9lkSuXI1JP2zTh%2bOQOzn%2fogNfJuMZ9Tdg%3d&risl=&pid=ImgRaw&r=0" 
                alt=""/>
                <p className='messageText'>Hello this is a message</p>
            </div>
            <div className='messageButtom'>1 hour ago</div>
        </div>
    )
}
export default Message
    