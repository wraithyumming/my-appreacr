import React from 'react'

const RenderComponent = () => {
    const firstRanderValue = []
    const secondRanderValue = [1,2,3]
    return (
        <>
            {firstRanderValue.length ? <p>I'm firstRanderValue</p> : null}
            {secondRanderValue && <p>I'm secondRanderValue</p>}
        </>
    )
}

export default RenderComponent
