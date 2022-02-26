import React from 'react'
import "./footer.css"
import Footer1 from"../../assets/footer/footer1.png"
import Footer2 from"../../assets/footer/footer2.png"
import Footer3 from"../../assets/footer/footer3.png"
const Footer = () => {
  return (
    <>
    <div className="footer">
        <img src={Footer1} alt="" />
        <img src={Footer2} alt="" />
        <img src={Footer3} alt="" />
    </div>
    </>
  )
}

export default Footer