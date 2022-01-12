import React from 'react'
import { GroceryInput} from "./groceryInput"
import { useState } from 'react'
import {GroceryList} from './GroceryList'
export const Grocery = () => {

    const [list ,setList] = useState([])

       const handleData=(data)=>{
           setList([...list,data])//spreading the previous data and adding the new data
       }
   return (
       <div>
           <GroceryInput handleData  ={handleData}/>
           {list.map((e,i) => (
           <GroceryList key ={i} title={e}/>))}
       </div>
   )
}
