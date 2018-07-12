import React from 'react'
import './CharComponent.css'

const CharComponent = (props) => {
    return (
        <div className="card">
            <p onClick={props.click}>{props.ch}</p>
        </div>
    )
}
export default CharComponent