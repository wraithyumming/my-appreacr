import React from 'react'
import TodosList from './TodoList'

const RenderComponent = () => {
    const toDos = [
        { id: 1, todo: 'firstTodo' },
        { id: 2, todo: 'secondTodo' },
        { id: 3, todo: 'thirdTodo' },
        { id: 4, todo: 'fourthTodo' },
    ]
    return <div>
       {toDos.map((todo) => {
        return <TodosList key={index} renderOneTodo={todo.todo} />
       })}
    </div>
}


export default RenderComponent
