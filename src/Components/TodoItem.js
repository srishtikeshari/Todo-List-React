import React from 'react'

export const TodoItem = (props) => {
    return (
        <div>
            <h3>{props.todo.title}</h3>
            <h4>{props.todo.desc}</h4>
            <button type="button" className="btn btn-primary">Mark Done</button>
            <button type="button" className="btn btn-danger"onClick={() => {props.onDelete(props.todo, props.todo.sno)}}>Delete</button>
                
            </div>
    )
}
