import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/**
 * state vs props
 * state 和 props 有着千丝万缕的关系。它们都可以决定组件的行为和显示形态。一个组件的 state 中的数据可以通过 props 传给子组件，一个组件可以使用外部传入的 props 来初始化自己的 state。但是它们的职责其实非常明晰分明：state 是让组件控制自己的状态，props 是让外部对组件自己进行配置。
 * react推荐健使用无状态组件
 * 
 */
class HelloWorld extends Component {
  constructor() {
    super()
  }

  sayHi () {
    alert('Hello World')
  }

  render () {
    return (
      <div onClick={this.sayHi.bind(this)}>Hello World</div>
    )
  }
}

/**
 * 用函数式组件的编写方式就是：
 * @param {*} props 
 */
const HelloWorld = (props) => {
  const sayHi = (event) => alert('Hello World')
  return (
    <div onClick={sayHi}>Hello World</div>
  )
}
ReactDOM.render(
  <div>
    <Computer />
  </div>
  ,
  document.getElementById("root")
)
