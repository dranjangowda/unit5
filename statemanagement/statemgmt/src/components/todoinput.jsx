import React from 'react'
import { useState } from 'react'

export const TodoInput = ({getData}) => {
    const[text,setText] = useState("")
    const handleChange = (e)=>{
        setText(e.target.value)
            //ther is only one way to pass the above value to handle Click that is to create state 
    }
    const handleClick=()=>{
            // console.log(text)
            getData(text)
            //the text is recieved onclicking the button
    }
    return (
        <div>
            <input placeholder='enter the todo ' type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Add Todo</button>
        </div>
    )
}
