import React, { createContext, useState } from "react";
import Slider from "react-slick";
import computerScienceBooks from "./BooksData(test)/TrendsBookss";
import TrendBooks from "./TrendsBooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import { useEffect } from "react";

//test fetch data(TestBackEnd)
export const BookContext = createContext();
function Slide() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container mt-4 px-5 ml-2">
      <Slider {...settings}>
        {computerScienceBooks.map((book) => (
          <TrendBooks key={book.id} item={book} img={book.bookImg} />
        ))}
      </Slider>
    </div>
  );
}

export default Slide;