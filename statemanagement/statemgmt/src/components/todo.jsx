import React from 'react'
import { TodoInput } from './todoinput'
import { useState } from 'react'
import { TodoItem } from './todoItem'
import { v4 as uuidv4 } from 'uuid';
 export const Todo = () => {

     const [list ,setList] = useState([])

        const getData=(data)=>{
            const payLoad = {
                title:data,
                status:false,
                id:uuidv4(10),
            }
        console.log(data)
            setList([...list,payLoad])//spreading the previous data and adding the new data
        }
    return (
        <div>
            <TodoInput getData ={getData}/>
            {list.map((e,i) => (
            <TodoItem key ={i}title={e.title} status={e.title}/>//instead of writing this you can write 
            //<TOoItem key = {e.id} {...e}both are going to do the same job
            ))}
        </div>
    )
}

