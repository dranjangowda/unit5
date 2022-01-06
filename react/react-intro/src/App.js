import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* //writing css in js file */}
    <h1 style={{
      color:"red",
      fontSize:"40px",
      backgroundColor:"blue"
    }}> Hello world</h1>

    {
      [1,2,3,4,5].map((e) =>(
        <h1>hello{e}</h1>
      ))
    }
    <img src={logo}></img>
    </div>
  );
}

export default App;
