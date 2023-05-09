import React from 'react';
import './conversation.css';

function Conversation(props){
    
    return(
        <div className='conversation'>
            <img className='conversationImg' 
            src={props.image} 
            alt=''/>
            <span className='conversationName'>{props.name}</span>
        </div>
    )
}
export default Conversation    
