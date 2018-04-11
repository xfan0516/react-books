import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class LikeButton extends Component {
  constructor() {
    super()
    /* TODO */
    this.state = {
      isLiked: false
    }
  }
  handleClickOnLikeButton() {
    this.setState({
      isLiked: !this.state.isLiked
    })
    if(this.props.onClick){
      this.props.onClick()
    }
  }


  render() {

    const likedText = this.props.likedText || '取消';
    const unLikedText = this.props.unLikedText || '点赞';
    var wordings = this.props.wordings || { likedText: '已赞', unlikedText: '赞' }
    return (<div onClick={this.handleClickOnLikeButton.bind(this)}>
      {this.state.isLiked ? wordings.likedText : wordings.unlikedText}👍
      </div>)
  }
}
// 通过对象的方式传入props
// 还可以往组件里传入一个函数
class Index extends Component {
  render() {
    return (
      <LikeButton wordings={{ likedText: '已赞', unlikedText: '赞' }}
        onClick={() => console.log('click on like button!')}
      />
    )
  }
}
ReactDOM.render(
  <div>
    <Index />
  </div>
  ,
  document.getElementById("root")
)
