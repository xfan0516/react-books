import React from 'react';

const Comment = (props) =>{
    console.log(props)
    return (
        <div className="comment">
            <span className="red">{props.comment.username}</span>
            <span >{props.comment.content}</span>
        </div>
    )
}
export default Comment;