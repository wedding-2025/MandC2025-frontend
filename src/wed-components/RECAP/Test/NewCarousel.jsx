import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { forwardRef } from 'react';
import './carousel.css';

const NewCarousel = forwardRef(({
  children,
  slidesToShow = 1,
  slidesToShowMobile = 1,
  autoplay = false,
  autoplaySpeed = 3000,
}, ref) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: slidesToShowMobile,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto mt-5">
      <Slider ref={ref} {...settings}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className="pt-12">
            {child}
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default NewCarousel;
