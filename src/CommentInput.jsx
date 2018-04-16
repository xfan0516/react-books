import React, {Component} from 'react';

class CommentInput extends Component {
    constructor(){
        super();
        this.state = {
            name: "张三",
            content: "快来刷波 666~~~"
        }
    }
    handleOnClick(){
        if(this.props.onSubmit){
            console.log(this.props.onSubmit())
        }
    }
    handleOnChangeUsername(event){
        console.log(event)
        // const user = e
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeContent(){

    }
    
    render(){
        
        return (
            <div>
                <p>姓名： <input onChange={this.handleOnChangeUsername.bind(this)} value={this.state.name}/></p>
                <p>内容： <textarea onChange={this.handleOnChangeContent.bind(this)} name="" id="" value={this.state.content} cols="30" rows="10"></textarea></p>
                <button onClick={this.handleOnClick.bind(this)}>提交</button>
            </div>
        )
    }
}
export default CommentInput;