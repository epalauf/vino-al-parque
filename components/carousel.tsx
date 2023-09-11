"use client"
import React from "react";

import { Image } from "@nextui-org/react";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';




export const CarouselComponent: React.FC = () => {

    const images = [
        '/static/images/1.jpg',
        '/static/images/2.jpg',
        '/static/images/3.jpg',
        '/static/images/4.jpg',
        // Add more image URLs as needed
      ];


  return (
    <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
      {images.map((image, index) => (
        <div key={index}>
          <Image width={1200} height={600} src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
}
