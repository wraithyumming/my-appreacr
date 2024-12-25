import React from 'react'

const ListItemCoponent = (props) => {
    return (
        <>
            <li key={props.element}>{props.name}</li>
            {props.children}
        </>
    )
}

export default ListItemCoponent
