import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends Component {
    render (){
        const isGoodWord = true;
        const goodWord = <strong>is good</strong>
        const baddWord = <strong>is not good</strong>
        return (
            <div>
            <h1>React 小书</h1>
                {isGoodWord ? goodWord : baddWord}
            </div>
            
        )
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById("root")
)
