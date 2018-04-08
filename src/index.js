import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeButton extends Component {
    constructor(){
        super();
        this.state = {
            isLike: false
        }
    }
    // setState 接受函数参数
    handleClickOnLikeButton(){
        console.log(this.state.isLike)
        this.setState({
            isLike: !this.state.isLike
        })
        console.log(this.state.isLike)
    }
    render(){
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLike ? '取消': '点赞'}👍
            </button>
        )
    }
}
ReactDOM.render(
    <div>
        <LikeButton />
    </div>
    ,
    document.getElementById("root")
)
