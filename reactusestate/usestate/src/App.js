import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [count, setCount] = useState(0)
  const addOne = () =>{
    if(count <= 10){
      setCount(count + 1)
    }else{
      setCount(0)
    }
    
  }
  const addfive = (value) =>{
    setCount(count + value)
  }
  const subtractOne = () =>{
    setCount(count - 1)
  }
  const intoTwo = () => {
    setCount(count * 2)
  }
  const changeCount =(value) =>{
    setCount(count / value)
  }

  if(count > 1000){
    return <div> the counter reached maximum value</div>
  }
  // if(count %2 ===0){
  //   return <div> the count is even</div>
  // }
  return (
    
    <div className="App">
    
     <h1>Counter:{count}</h1>
     {/* when the counter reaches 1000 the buttons gets disbled  this is called conditional rendering*/}
 {
   count < 1000 &&(
     <div>
    <button onClick={addOne}>ADD1</button>
    <button onClick={() => addfive(5)}>Add 5</button>
    <button onClick={() => changeCount(2)}>divide by 2</button>
    <button onClick={subtractOne}>sub1</button>
    <button onDoubleClick={intoTwo}>multiply by 2</button>
    <div>Counter is {count % 2 === 0 ? "even":"odd"}</div>
     </div>
   )
 }
    </div>
  );
}

export default App;
