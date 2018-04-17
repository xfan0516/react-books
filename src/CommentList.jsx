import React from 'react';
import Comment from './Comment';

const comments = [];
const CommentList = (props) =>{
    const comment = props.comments
    
    if(props.comments){
        comments.push(comment)
    }
    console.log(comments.length)
    return (
        <div className="commentlist">
            {comments.map((item,i) => <Comment comment={item} key={i} /> )}
        </div>
    )
}
export default CommentList;