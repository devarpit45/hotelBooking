import React from "react";
import Slider from "react-slick";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="http://netgon.ru/themeforest/yourtravelworld_html/img/intro/item-2.jpg"  alt="Hotel" className="slider-image" />
        </div>
        <div>
          <img src="http://netgon.ru/themeforest/yourtravelworld_html/img/intro/item-4.jpg" alt="Beach" className="slider-image" />
        </div>
        <div>
          <img src="http://netgon.ru/themeforest/yourtravelworld_html/img/intro/item-2.jpg" alt="Flight" className="slider-image" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
