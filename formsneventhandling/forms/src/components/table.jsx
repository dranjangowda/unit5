import "./table.css"
import axios from"axios"
export const Table=()=>{

    axios.get('http://localhost:3900/users')
    .then((response) => {
        return response.json
    })
    .catch((error) => { 
       console.log("error")
    });
   return (
       <div className="table"> 
           
       </div>
   )
}