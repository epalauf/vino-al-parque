"use client"
import React from "react";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';




export const CarouselComponent: React.FC = () => {

    const images = [
        '/1.jpg',
        '/2.jpg',
        '/3.jpg',
        '/4.jpg',
        // Add more image URLs as needed
      ];


  return (
    <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
}
