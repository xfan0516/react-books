import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
/*     constructor(){
        super();

    } */
    handleOnsubmit(comments){
        console.log(comments)

    }
    render(){
        return (
            <div className="commentapp">
                <CommentInput onSubmit={this.handleOnsubmit.bind(this)}/>
                <CommentList />
            </div>
        )
    }
}
export default CommentApp;