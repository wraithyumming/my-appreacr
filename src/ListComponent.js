import { useState } from 'react'
import ListItemComponent from './ListItemComponent'
import ButtonComponent from './ButtonComponent'

const ListComponent = () => {
    const initialValues = [
        { id: 1, name: 'first' },
        { id: 2, name: 'second' },
        { id: 3, name: 'third' },
    ]
    const [input, setInput] = useState('')
    const [items, setItem] = useState(initialValues)
 
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

    const handleDelete = () => {
        console.log('delete button clicked')
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
                    <ListItemComponent id={element.id} element={element.name}>
                        {
                            <ButtonComponent
                                text={'delete'}
                                onClick={handleDelete}
                                type={'button'}
                            />
                        }
                    </ListItemComponent>
                ))}
            </ul>
            <button onClick={() => onClickHandler(input)}>
                Add new element
            </button>
        </>
    )
}
export default ListComponent
