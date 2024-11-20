import React from "react";
import Slider from 'react-slick';
import "./gallery.css"
import "../../slick/slick.css";
import "../../slick/slick-theme.css";

import train from '../../assets/car.png';
import train2 from '../../assets/forest.png';
import dj from '../../assets/moon.png';

const Gallery = () => {
    const settings ={
    dots: true,  // Show pagination dots
    infinite: true,  // Infinite loop
    speed: 500,  // Transition speed
    slidesToShow: 1,  // Number of slides to show at a time
    slidesToScroll: 1,  // Number of slides to scroll at a time
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 2000
    };

    return (
        <div className = "galleryc">
            <h1 align ="center"  >My Gallery!</h1>
            <Slider {...settings}>
                <div>
                    <img src = {train} className ="sliderimage" />
                </div>
                <div>
                    <img src = {train2} className ="sliderimage" />
                </div>
                <div>
                    <img src = {dj} className ="sliderimage" />
                </div>
                </Slider>   
        </div>


    );

};

export default Gallery;