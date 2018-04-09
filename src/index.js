import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Dog extends Component {
    constructor () {
      super()
      /* TODO */
      this.state = {
        isBarking: false,
        isRunning: false
      }
    }
    
    bark () {
      /* TODO */
      console.log("isBarking")
      this.setState({
        isBarking: true
      })
      this.run()
    }
    
    run () {
      /* TODO */
      this.setState({
        isBarking: false,
        isRunning: true
      })
      console.log("isRunning")
      setTimeout(()=>{
        this.setState({
            isRunning: false
          })
      },20)
    }
   
    render () {
      return (<div onClick={this.bark.bind(this)}>DOG</div>)
    }
  }
ReactDOM.render(
    <div>
        <Dog />
    </div>
    ,
    document.getElementById("root")
)
