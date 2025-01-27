import React from "react";
import Slider from "react-slick";


function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    

  };
  return (
    <div >
      <Slider {...settings}>
        <div>
          <img  src="https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467_1280.jpg"/>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_1280.jpg"/>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2018/07/01/20/01/dashboard-3510327_1280.jpg"/>
        </div>
        <div>
         <img src="https://cdn.pixabay.com/photo/2016/05/06/16/32/car-1376190_1280.jpg"/>
        </div>
      
      </Slider>
    </div>
  );
}

export default SimpleSlider;
