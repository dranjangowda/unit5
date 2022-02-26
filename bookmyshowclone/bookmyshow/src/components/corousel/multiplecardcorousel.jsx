import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"
import { useEffect } from 'react'
import { useState } from 'react'
import Gangubhai from "../../assets/slider2images/gangubhai.jpg"
import Bheemanaidu from "../../assets/slider2images/bheemanaidu.jpg"
import Djtillu from "../../assets/slider2images/djtillu.jpg"
import Ekluvaya from "../../assets/slider2images/ekluvya.jpg"
import By2luv from "../../assets/slider2images/by2luv.jpg"
import  Lovemocktail from "../../assets/slider2images/lovemocktail.jpg"
import Oldmonk from "../../assets/slider2images/oldmonk.jpg"
import Spidermannowayhome from "../../assets/slider2images/spidermannowayhome.jpg"
import Unchartered from "../../assets/slider2images/unchartered.jpg"


import "./multiplecardcorousel.css"

const Multicorousel = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3900/bookmyshow")
        .then((response) => setData(response.data));
    },[])
console.log(data)
    const settings = {
        speed: 500,
        infinite:false,
        cssEase: 'linear',
        lazyLoad: 'progressive',
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: <button type="button" class="slick-next">Next</button>,
        prevArrow: <button type="button" class="slick-prev">Previous</button>
    };

    return (
        <div className="slider">
          
            <Slider {...settings}>
        {
            data.map((e)=>{
                return(
                   <>
                    <div className='cards'>
                        <img src={e.cover_image_url} alt="" />
                    </div>
                    <p>{e.movie_name}</p>
                   </>
                    
                )
            })
        }
            </Slider>
        </div>
    );
}
export default Multicorousel
