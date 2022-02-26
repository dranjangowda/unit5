import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/slider1images/corousel1.jpg"
import Image2 from "../../assets/slider1images/corousel2.jpg"
import Image3 from "../../assets/slider1images/corousel3.jpg"
import Image4 from "../../assets/slider1images/corousel4.jpg"
import Image5 from "../../assets/slider1images/corousel5.jpg"
import "./corousel.css"


const Corousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1900,
        cssEase: 'linear',
        lazyLoad: 'progressive',
        nextArrow: <button type="button" class="slick-next">Next</button>,
        prevArrow: <button type="button" class="slick-prev">Previous</button>
    };

    return (
        <div className="slider">
            <Slider {...settings}>
                <div>
                    <img src={Image1}
                        alt=""/>
                </div>
                <div>
                    <img src={Image2}
                        alt=""/>
                </div>
                <div>
                    <img src={Image3}
                        alt=""/>
                </div>
                <div>
                    <img src={Image4}
                        alt=""/>
                </div>
                <div>
                    <img src={Image5}
                        alt=""/>
                </div>
                <div>
                    <img src={Image1}
                        alt=""/>
                </div>
            </Slider>
        </div>
    );
}
export default Corousel
