import React, {Component} from 'react';

class CommentInput extends Component {
    constructor(){
        super();
        this.state = {
            username: "张三",
            content: "快来刷波 666~~~"
        }
    }
    handleOnClick(){
        if(this.props.onSubmit){
            this.props.onSubmit(this.state)
        }
        this.setState({
            content:''
        })
    }
    handleOnChangeUsername(event){
        this.setState({
            username: event.target.value
        })
    }
    handleOnChangeContent(event){
        this.setState({
            content: event.target.value
        })
    }
    
    render(){
        
        return (
            <div className="comment-input">
                <div><span>姓名： </span><p><input onChange={this.handleOnChangeUsername.bind(this)} value={this.state.username}/></p></div>
                <div><span>内容： </span><p><textarea onChange={this.handleOnChangeContent.bind(this)} name="" id="" value={this.state.content} cols="50" rows="3"></textarea></p></div>
                <button className="fr" onClick={this.handleOnClick.bind(this)}>提交</button>
            </div>
        )
    }
}
export default CommentInput;