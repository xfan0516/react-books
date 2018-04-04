import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/* class Title extends Component {
    render() {
        return (
            <div>
                <h1> React 小书</h1>

            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h2 style={{ color: '#f55' }}>自定义的组件都必须要用大写字母开头，普通的 HTML 标签都用小写字母开头。</h2>
                <h1>this a Header</h1>
                <Title />
            </div>

        )
    }
}

class Main extends Component {
    render() {
        return (
            <h1>
                this a Main
            </h1>

        )
    }
}

class Footer extends Component {
    render() {
        return (
            <h1>
                this a Footer
            </h1>

        )
    }
}

class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>

        )
    }
} */
/* 搭房子 */
/* class Hose extends Component {
    render(){
        return(
            <div className="hose">
                <Room />
                <Bathroom />
            </div>
        )
    }
}

class Room extends Component {
    render(){
        return(
            <div className="room">
                <Man />
                <Dog />
                <Dog />
            </div>
        )
    }
}

class Bathroom extends Component {
    render(){
        return(
            <h1 className="bathroom">
                this Bathroom
            </h1>
        )
    }
}

class Man extends Component {
    render(){
        return(
            <h1 classNam="man">
                this Man
            </h1>
        )
    }
}

class Dog extends Component {
    render(){
        return(
            <h1 className="dog">
                this Dog
            </h1>
        )
    }
} */

// 需要手动将实例方法bind到当前实例上去在传入给react.js
class Title extends Component{
    handleClickOnTitle(event){
        console.log(event.target.innerHTML) //react 小书
        console.log(this) 
    }
    render (){
        return (
            <h1 onClick={this.handleClickOnTitle.bind(this)}>
                react 小书
            </h1>
        )
    }
}
// 你也可以在 bind 的时候给事件监听函数传入一些参数：
class Title1 extends Component{
    handleClickOnTitle(hello,word,event){ // **注意 event一定要放在最后边
        console.log(event.target.innerHTML) //react 小书
        console.log(this) 
        console.log(word)  // hello
    }
    render (){
        return (
            <h1 onClick={this.handleClickOnTitle.bind(this,'hello','word')}>
                react 小书
            </h1>
        )
    }
}
ReactDOM.render(
    <div>
        <Title />
        <Title1 />
    </div>
    ,
    document.getElementById("root")
)
