import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    constructor(){
        super();
        this.state = {}

    }
    handleOnsubmit(comments){
        // console.log(comments)
        this.setState(comments)

    }
    render(){
        return (
            <div className="commentapp">
                <CommentInput onSubmit={this.handleOnsubmit.bind(this)}/>
                <CommentList comments={this.state}/>
            </div>
        )
    }
}
export default CommentApp;