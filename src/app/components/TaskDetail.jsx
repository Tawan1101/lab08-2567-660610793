import React from 'react'

export default function TaskDetail(props) {


    let Style = {};
    if (props.isDone) {
    Style = {"text-decoration":"line-through"};
    }

  return (

    
       <div className="d-flex p-3 gap-2 align-items-center border-bottom" >
          <span style = {Style} > {props.title}</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
  )
}
