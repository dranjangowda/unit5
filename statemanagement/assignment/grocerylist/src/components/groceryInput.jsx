import React from 'react'
import { useState } from 'react'
export const GroceryInput = ({handleData}) => {
    const [text,setText] =useState("")
    const handleChange=(e)=>{
            setText(e.target.value)
    }
    const handleClick = () => {
            handleData(text)
    }
    return (
        <div>
            <input placeholder='enter the grocery' type='text' onChange={handleChange}/>
            <button onClick={handleClick}>Add Grocery</button>
        </div>
    )
}


