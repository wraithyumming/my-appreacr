import React from 'react'

const TodoList = (props) => {
    console.log(props)
    return <div>{props.renderOneTodo}</div>
}

export default TodoList
