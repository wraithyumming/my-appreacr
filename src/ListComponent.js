import { useState } from 'react'
import ListItemCoponent from './ListItemComponent'

const ListComponent = () => {
    const [input, setInput] = useState('')
    const [items, setItem] = useState(['First element'])

    const onClickHandler = () => {
        const updatedElement = [...items, input]
        setItem(updatedElement)
        setInput('')
    }

    const onChangeHandler = (e) => {
        const value = e.target.value
        setInput(value)
    }

    const onEnterHandler = (e) => {
        if (e.key === 'Enter') {
            const updatedElement = [...items, input]
            setItem(updatedElement)
            setInput('')
        }
    }

    return (
        <>
            <input
                onKeyDown={onEnterHandler}
                onChange={onChangeHandler}
                value={input}
            />
            <h2>{items.length}</h2>
            <ul>
                {items.map((element, index) => (
                    <ListItemCoponent element={element} index={index} />
                ))}
            </ul>
            <button onClick={onClickHandler}>Add new element</button>
        </>
    )
}
export default ListComponent
