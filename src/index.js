import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Dog extends Component {
    bark(){
        console.log("bark")
        this.run()
    }
    run(){
        console.log("run")

    }
    render(){
        return (
            <h1 onClick={this.bark.bind(this)}>
                Dog
            </h1>
        )
    }
}
ReactDOM.render(
    <div>
        <Dog />
    </div>
    ,
    document.getElementById("root")
)
