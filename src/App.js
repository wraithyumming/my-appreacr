import { useState } from 'react'
import './App.css'

function App() {
    const [input, setInput] = useState('');
    const [item, setItem] = useState(['First element']);
    const onClickHandler = () => {
        const updatedElement = [...item, input];
        setItem(updatedElement);
        setInput('');
    };

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <input onChange={onChangeHandler} value={input} />
                <ul>
                    {item.map((element, index) => (
                        <li key={`${element}${index}`}>
                            {element} {index}
                        </li>
                    ))}
                </ul>
                <button onClick={onClickHandler}>Add new element</button>
            </header>
        </div>
    )
}

export default App
