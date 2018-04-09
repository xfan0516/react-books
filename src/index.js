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
    /* 
        handleClickOnLikeButton () {
            this.setState({ count: 0 }) // => this.state.count 还是 undefined
            this.setState({ count: this.state.count + 1}) // => undefined + 1 = NaN
            this.setState({ count: this.state.count + 2}) // => NaN + 2 = NaN
        }
    */
    // setState的第二种使用方式
    handleClickOnLikeButton(){
        this.setState((prveState) => {
            return {count : 0}
        })
        this.setState((prveState) => {
            return {count : prveState.count + 2} // 上一个 setState 的返回是 count 为 0，当前返回 1
        })
        this.setState((prveState) => {
            return {count : prveState.count + 1}  // 上一个 setState 的返回是 count 为 1，当前返回 3

        })
        console.log(this.state.count)
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
