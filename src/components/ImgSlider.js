import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="img" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="img" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" alt="img" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" alt="img" />
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

///////////STYLED COMPONENTS
const Carousel = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
      rgb(0 0 0 / 73%) 0 10px 16px -10px;
    transition: all 300ms;

    &:hover {
      border: 4px solid rgb(250 250 250 / 75%);
    }
  }
`;
