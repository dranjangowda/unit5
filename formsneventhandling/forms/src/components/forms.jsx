import { useState } from "react";
import "./form.css"
import axios from  "axios"
import {nanoid} from "nanoid"
//for multiple input you should have only one handleChnage and handleSubmit funciton 

export const Form =()=>{
    const [form,setForm]= useState({
        username:"",
        age:"",
        address:"",
        department:"",
        maritialstatus:"",
        salary:""
    });
    // const [data,setData] = useState([])


    const handleChange=(e)=>{
            // console.log(e.target.name,e.target.value)
            let {name,value,checked,type} = e.target //its nothing but e.target.value = name , e.target.value = value of the entered input
            //how to keep updating the form when new person is entering the input
            //so on to update regularly we need to set the form using the name of the input this can be done
            //below we can directly use the name and that value and can be set or updated to the form
            //...form is spreading the object and giving the new value as it changes
            value = type ==="checkbox"?checked:value;
            setForm({
                ...form,
                [name]:value,
            })
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        form["id"] = nanoid(7)
        // setData([form,...data])
        // setData(form)
        // axios.post("http://localhost:3900/users",data) 
        // setData([form,...data])
    }
    const postData = ()=>{
        const payload = {
            username:form.username,
            age:form.age,
            address:form.address,
            department:form.department,
            salary:form.salary,
            married:form.married
        }
        fetch("http://localhost:3900/users",{
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
                <form method="POST" onSubmit={handleSubmit}>
                <input onChange={handleChange} placeholder="enter the name" type="text" name="username"/>
                <input onChange={handleChange} placeholder="enter the age" type="number" name="age"/>
                <input onChange={handleChange} placeholder="enter the address" type="text" name="address"/>
                <select name="department" onChange={handleChange} >
                    <option value="sales">sales</option>
                    <option value="engineering">engeneering</option>
                    <option value="housemaintanance">House maintanance</option>
                </select>
                <input onChange={handleChange} type="text" placeholder="enter the salary" name="salary"/>
                <label >maritial status</label>
                <input name="married" onChange={handleChange} type="checkbox" />
                {/* <input type="submit"/> */}
            </form>
            <button onClick={postData}>post data</button>
          </div>
    )
}