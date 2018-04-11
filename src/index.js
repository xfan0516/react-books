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
  // props 不可变
  handleClickOnLikeButton() {
    // this.props.likedText = '取消' j就会报错
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
// 通过父组件修改props
class Index extends Component {
  constructor(){
    super();
    this.state = {
      likedText: '已赞',
      unlikedText: '点赞'
    }
  }
  handleClickChange(){
    this.setState({
      likedText: '取消',
      unlikedText: '点赞',
    })
  }
  render() {
    return (
      <div>
        <LikeButton 
        likedText={this.state.likedText} 
        unlikedText={this.state.unlikedText} 
        onClick={() => console.log('click on like button!')}
      />
      <button onClick={this.handleClickChange.bind(this)}>改变props</button>
      </div>
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
