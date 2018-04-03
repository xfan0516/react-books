import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends Component {
    renderGoodWord (goodWord,baddWord){
        const isGoodWord = true;
        return isGoodWord ? goodWord : baddWord;
    }
    render (){
              return (
            <div>
            <h1>React 小书</h1>
                {this.renderGoodWord(
                    <strong>is good</strong>,
                    <strong>is not good</strong>
                )}
            </div>
            
        )
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById("root")
)
