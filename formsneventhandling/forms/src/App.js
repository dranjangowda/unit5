import logo from './logo.svg';
import './App.css';
import {useState,useRef} from "react"
import { Form } from './components/forms';
import{Table} from './components/table'
function App() {
  //  const test = useRef(1)
  //  const [d,setD]= useState(1)
  //  console.log(test)
  return (
    <div className="App">
      <Form/>
     {/* <button onClick={()=>{
       test.current= test.current+ 1
       console.log(test)
     }}>
       increment test
     </button>
     <button onClick={()=>{
        setD ((p) => p +1)
     }}>rerender</button> */}
     <Table/>
    </div>
  );
}

export default App;
