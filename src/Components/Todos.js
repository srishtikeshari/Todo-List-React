import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
    return (
        <div className="container">
            <h3>Todo List</h3>
            {props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}

            <TodoItem todo={props.todos[0]} onDelete={props.onDelete}/>
        </div>
    )
}
