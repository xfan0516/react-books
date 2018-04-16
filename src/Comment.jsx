import React, {Component} from 'react';

const Comment = (props) =>{
    
    return (
        <div className="comment">
            <span className="red">{props.username}</span>
            <span >{props.content}</span>
        </div>
    )
}
export default Comment;