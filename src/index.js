import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeButton extends Component {
    constructor () {
      super()
      /* TODO */
      this.state = {
        isLiked: false
      }
    }
    handleClickOnLikeButton(){
      this.setState({
        isLiked: !this.state.isLiked
      })
    }
    
    
   
    render () {
      const likedText = this.props.likedText || '取消';
      const unLikedText = this.props.unLikedText || '点赞';
      return (<div onClick={this.handleClickOnLikeButton.bind(this)}>
          {this.state.isLiked ? likedText : unLikedText}👍
      </div>)
    }
  }
ReactDOM.render(
    <div>
        <LikeButton likedText="已赞" unLikedText="点赞"/>
    </div>
    ,
    document.getElementById("root")
)
