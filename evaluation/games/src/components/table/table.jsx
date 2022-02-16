import "./table.css"
import axios from"axios"
import {useEffect,useState} from 'react' 
export const Table=()=>{

        const [data,setData] = useState([])
    const [updatedData,setUpDatedData]=useState([])
            useEffect(() => {
                axios.get(" http://localhost:4300/games")
                    .then((response) => setData(response.data));
                }, []);
                console.log(data)
                function sortPrice(){
                    let updateddata = data.sort(function(a,b){
                        return a.gameprice -b.gameprice
                    })
                    setUpDatedData(updateddata)
                }
                
                function sortRating(){
                        let updatedData = data.sort(function(a,b){
                            return a.gamerating - b.gamerating
                        })
                        setUpDatedData(updatedData)
                }
                function sortAlphabetically(){
                        // let updatedData = data.sort(function(a,b){
                        //     return a.gamename-b.gamename
                        // })
                        // setUpDatedData(updatedData)
                }
   return (
    <div>
        <h1>Data</h1>
        {
           <div className="sort">
               <h1>sort the table</h1>
               <button onClick={sortPrice}>sort by price</button>
               <button onClick={sortRating}>sort by rating</button>
               <button onClick={sortAlphabetically}>sort alphabetically</button>
           </div>
       }
       {
           
            <table>
              <tr>
                <td>game Name</td>
                <td>gameauthor</td>
                <td>game tags</td>
                <td>game price</td>
                <td>for kids</td>
                <td>game discription</td>
                <td>game rating</td>
              </tr>
            {
                data.map((e) => (
                    <tr>
                    <td>{e.gamename}</td>
                    <td>{e.gameauthor}</td>
                    <td>{e.gametags}</td>
                    <td>{e.gameprice}</td>
                    <td>{e.forkids ? "yes":"no"}</td>
                    <td>{e.gamedesc}</td>
                    <td>{e.gamerating}</td>
                  </tr>
                    ))
            }
              
              </table>
       }
       
  </div>
   )
}