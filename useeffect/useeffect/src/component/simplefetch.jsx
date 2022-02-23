import"./simplefetch.css"
import {useState,useEffect}from "react"
import axios from 'axios'

function UserDetail() {

  const [data,setData] = useState([])

  useEffect(() => {
      axios.get(" http://localhost:3900/users")
          .then((response) => setData(response.data));
      },[]);
      console.log(data)
  return (
    <div className="UserDetail">
       {
            <table>
              <thead>
              <tr>
                <td>id</td>
                <td>first name</td>
                <td>last name</td>
                <td>email</td>
                <td>gender</td>
                </tr>
              </thead>
            {
                  data.map((e) => (
                    <tbody>
                    <tr>
                      <td>{e.id}</td>
                    <td>{e.first_name}</td>
                    <td>{e.last_name}</td>
                    <td>{e.email}</td>
                    <td>{e.gender}</td>
                  </tr>
                  </tbody>
                    ))
            }
              
              </table>
       }
    </div>
  );
}

export default UserDetail;
