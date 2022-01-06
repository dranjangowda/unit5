import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <h1 className='heading1'>Mobile Operating System</h1>
      {
        
      ["blackberry","iphone","windows phone","Android"].map((e) =>(
       <p><li className='lists'>{e}</li></p>
      ))
      }
       <h1 className='heading2'>Mobile Manufacturers</h1>
      {
      ["samsung","micromax","apple","HTC"].map((e) =>(
       <p><li className='lists'>{e}</li></p>
      ))
      }
      
    </div>
  );
}

export default App;
