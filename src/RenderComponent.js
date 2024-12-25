import React from 'react'
import TodosList from './TodosList'

const RenderComponent = () => {
    const toDos = [
        { id: 1, todo: 'firstTodo' },
        { id: 2, todo: 'secondTodo' },
        { id: 3, todo: 'thirdTodo' },
        { id: 4, todo: 'fourthTodo' },
    ]
    return <div>
       {toDos.map((todo, index) => {
        return <TodosList key={index} renderOneTodo={todo.todo} id={todo.id}/>
       })}
    </div>
}


export default RenderComponent
