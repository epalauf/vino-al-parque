"use client"
import React from "react";
import { Image } from "@nextui-org/react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export const CarouselComponent: React.FC = () => {
    const images = [
        'https://i.imgur.com/iWtUIp6.jpg',
        'https://i.imgur.com/1aC5LKS.jpg',
        'https://i.imgur.com/hs374MO.jpg',
        'https://i.imgur.com/iYwkH4y.jpg',
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
