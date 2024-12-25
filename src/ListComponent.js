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
        const updatedElement = [...items, { id: 4, name: input }]
        setItem(updatedElement)
        setInput('')
    }

    const onChangeHandler = (e) => {
        const value = e.target.value
        setInput(value)
    }

    const onEnterHandler = (e) => {
        if (e.key === 'Enter') {
            const updatedElement = [...items, { id: 5, name: input }]
            setItem(updatedElement)
            setInput('')
        }
    }

    const handleDelete = (id) => {
        const filteredItems = items.filter((item) => item.id !== id);
        setItem(filteredItems);
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
                    <ListItemComponent
                        key={element.id}
                        id={element.id}
                        name={element.name}
                    >
                        {
                            <ButtonComponent
                                text={'delete'}
                                onClick={() => handleDelete(element.id)}
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
