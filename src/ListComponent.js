import { useState } from 'react'
import ListItemCoponent from './ListItemCoponent'

const ListComponent = () => {
    const [input, setInput] = useState('')
    const [item, setItem] = useState(['First element'])

    const onClickHandler = () => {
        const updatedElement = [...item, input]
        setItem(updatedElement)
        setInput('')
    }

    const onChangeHandler = (e) => {
        const value = e.target.value
        setInput(value)
    }

    return (
        <>
            <input onChange={onChangeHandler} value="{input}" />
            <ul>
                {item.map((element, index) => (
                    <ListItemCoponent element={element} index={index} />
                ))}
            </ul>
            <button onClick={onClickHandler}>Add new element</button>
        </>
    )
}
export default ListComponent
