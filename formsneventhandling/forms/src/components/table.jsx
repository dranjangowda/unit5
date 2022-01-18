import "./table.css"
import axios from"axios"
import {useEffect,useState} from 'react'
import ReactTable from "react-table";  
export const Table=()=>{

        const [data,setData] = useState([])

            useEffect(() => {
                axios.get(" http://localhost:3900/users")
                    .then((response) => setData(response.data));
                }, []);
                console.log(data)
   return (
    <div>
       {
            <table>
              <tr>
                <td>Username</td>
                <td>age</td>
                <td>address</td>
                <td>Occupation</td>
                <td>salary</td>
              </tr>
            {
                  data.map((e) => (
                    <tr>
                    <td>{e.username}</td>
                    <td>{e.age}</td>
                    <td>{e.address}</td>
                    <td>{e.department}</td>
                    <td>{e.salary}</td>
                  </tr>
                    ))
            }
              
              </table>
       }
  </div>
   )
}