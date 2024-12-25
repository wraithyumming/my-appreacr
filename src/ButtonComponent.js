import React from 'react'

const ButtonComponent = (props) => {
    return (
    <button type={props.type} onClick={props.text}>
        {props.text}
    </button>
)}

export default ButtonComponent
