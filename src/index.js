import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/* class Header extends Component {
    render (){
        return (
                <h1>React 小书</h1>
            
        )
    }
} */
function renderContent(content){
    ReactDOM.render(
        <h1>{content}</h1>,
        document.getElementById("root")
    )
    
}
renderContent('hello world')