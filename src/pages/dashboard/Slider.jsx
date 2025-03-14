import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Slider = () => {
  return (
    <Carousel
      className='mb-10'
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={3000}
      autoPlay={true}
      keyBoardControl={true}
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >

      <img src="https://img.freepik.com/free-vector/gradient-horizontal-banner-template-cyber-monday-sale_23-2150815104.jpg" alt="Graph" style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }} />


      <img src="https://flashbannerads.wordpress.com/wp-content/uploads/2013/06/1-2.png" alt="Graph" style={{ width: '100%', height: '100%', borderRadius: '8px', objectFit: 'cover' }} />

    </Carousel>
  )
}

export default Slider