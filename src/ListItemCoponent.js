import React from 'react'

const ListItemCoponent = (props) => {
  return (
    <li key={`${props.element}${props.index}`}>
    {props.element} {props.index}
</li>
  )
}

export default ListItemCoponent