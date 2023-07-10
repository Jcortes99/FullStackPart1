import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  return(
    <h1>{props.name}</h1>
  )
}

const Part = (props) =>{
  return(
    <p>{props.part} {props.exer}</p>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part part={props.part1} exer={props.exer1}/>
      <Part part={props.part2} exer={props.exer2}/>
      <Part part={props.part3} exer={props.exer3}/>
    </div>
  )
}

const Total = (props) =>{
  return(
    <p>Number of exercises {props.exer}</p>
  )
}

const App = () => {
  const course ={
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header name={course.name}/>

      <Content part1={course.parts[0].name} exer1={course.parts[0].exercises} part2={course.parts[1].name} exer2={course.parts[1].exercises} part3={course.parts[2].name} exer3={course.parts[2].exercises}/>

      <Total exer={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))