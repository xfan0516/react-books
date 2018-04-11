import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// 所以 React.js 提供了一种方式 defaultProps，可以方便的做到默认配置。
class LikeButton extends Component {
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }

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
    if (this.props.onClick) {
      this.props.onClick()
    }
  }


  render() {

    return (<div onClick={this.handleClickOnLikeButton.bind(this)}>
      {this.state.isLiked ? this.props.likedText : this.props.unlikedText}👍
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
