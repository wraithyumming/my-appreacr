import React from 'react';
import TodosList from './TodosList';
import GrandChildComponent from './GrandChildComponent';

const RenderComponent = () => {
    const toDos = [
        { id: '1', todo: 'firstTodo' },
        { id: '2', todo: 'secondTodo' },
        { id: '3', todo: 'thirdTodo' },
        { id: '4', todo: 'fourthTodo' },
    ];

    const myName = {
        name: 'Kostya',
    };

    const myNameinArray = ['Kostya'];

    const myFunctionName = () => 'Kostya';

    return (
        <div>
            {toDos.map((todo) => (
                <TodosList
                    key={todo.id} // Используем уникальный id как ключ
                    renderOneTodo={todo.todo}
                    id={todo.id}
                />
            ))}
            <GrandChildComponent
                myName={myName}
                myNameinArray={myNameinArray}
                myFunctionName={myFunctionName}
            />
        </div>
    );
};

export default RenderComponent;
