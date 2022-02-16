import { useState } from "react";
import "./form.css"
import axios from  "axios"
import {nanoid} from "nanoid"

export const Form =()=>{
    const [form,setForm]= useState({
        gamename:"",
        gameauthor:"",
        gametags:"",
        gameprice:"",
        forkids:"",
        gamedesc:"",
        gamerating:"",
    });


    const handleChange=(e)=>{
         
            let {name,value,checked,type} = e.target 
           
            value = type ==="checkbox"?checked:value;
            setForm({
                ...form,
                [name]:value,
            })
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        form["id"] = nanoid(7)
    }
    const postData = ()=>{
        const payload = {                 
        gamename:form.gamename,
        gameauthor:form.gameauthor,
        gametags:form.gametag,
        gameprice :form.gameprice,
        forkids :form.forkids,
        gamedesc:form.gamedesc,
        gamerating:form.gamerating
        }
        fetch("http://localhost:4300/games",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(res => res.json())
        .catch(e => console.log(e))
    }
    // console.log(form)
    return (
          <div>
              <h1>game data collection</h1>
                <form method="POST" onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder="enter the gamename" type="text" name="gamename"/>
                <input onChange={handleChange} placeholder="enter the gameauthor" type="text" name="gameauthor"/>
                <input onChange={handleChange} placeholder="enter the gametag" type="text" name="gametag"/>
                <input onChange={handleChange} placeholder="enter the gameprice" type="text" name="gameprice"/>
                <label>
                    forkids
                </label>
                <input name="forkids" onChange={handleChange} type="checkbox" />
                <input onChange={handleChange} placeholder="enter the discription" type="text" name="gamedesc"/>
                <label>rating</label>
                <select name="gamerating" onChange={handleChange} >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>    
                {/* <input type="submit"/> */}
            </form>
            <button onClick={postData}>post data</button>
          </div>
    )
}
