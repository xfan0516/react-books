import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]
const User = (props) => {
  const { user } =  props;
  return (
    <div>
      <span>{user.username} </span>,
      <span>{user.age} </span>,
      <span>{user.gender}</span>
    </div>
  )
}
class Index extends Component {
  render () {
    return (
      <div>
        {users.map((item,i) => <User user={item} key={i}/>)}
       {/*  {users.map((item,i) =>{
          return(
            <div key={i}>

              <span>{item.username} </span>,
              <span>{item.age} </span>,
              <span>{item.gender}</span>
              <hr />
            </div>

          )
        } )} */}
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
