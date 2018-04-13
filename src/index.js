import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]
const Lesson = (props) =>{
  /* TODO */
  const {lessons} = props;
  return (
    <div>
      <h1>{lessons.title}</h1>
      <p>{lessons.description}</p>
    </div>
  )
}

class LessonsList extends Component {
  /* TODO */
  render(){
    return(
      <div>
        {lessons.map((item,i) => <Lesson lessons={item} key={i} />)}
      </div>
    )
  }
}
ReactDOM.render(
  <div>
    <LessonsList />
  </div>
  ,
  document.getElementById("root")
)
