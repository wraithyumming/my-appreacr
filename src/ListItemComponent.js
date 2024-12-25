import React from 'react'

const ListItemCoponent = (props) => {
    return (
        <>
            <li key={props.id}>{props.name}</li>
            {props.children}
        </>
    )
}

export default ListItemCoponent
