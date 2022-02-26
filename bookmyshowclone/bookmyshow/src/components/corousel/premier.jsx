import React from 'react'
import Premierimg from "../../assets/premier/premier.png"
import Multicorousel from './multiplecardcorousel'
import "./premier.css"
const Premier = () => {
  return (
    <>
    <div className='premier-container'>
   <div className='premier-img'>
   <img src={Premierimg} alt="" />
   <h2>Premier</h2><br></br>
   <p>
       brand new release every friday
   </p>
   </div>
   <div>
       <Multicorousel/>
   </div>
    </div>
    </>
  )
}

export default Premier