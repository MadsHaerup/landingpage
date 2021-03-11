import React from 'react';
import Carousel from 'react-grid-carousel';
import CarouselItem from './CarouselItem';
import './Gallery.scss';
export default function Gallery() {
  return (
    
      <Carousel 
        cols={1}
        rows={1}
        gap={0}
        loop
        showDots={true}
        autoplay={3000}
        >
        <Carousel.Item>
          <CarouselItem 
          image="https://picsum.photos/1920/1080?random=0"
          copy="Get happier customers and retain them"
          ctaLink="/founders"
          ctaCopy="Click here, to get started"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItem 
          image="https://picsum.photos/1920/1080?random=1"
          copy="Turn your business into a moneymaker"
          ctaLink="/founders"
          ctaCopy="Click here, to get started"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItem 
          image="https://picsum.photos/1920/1080?random=2"
          copy="How to start a profitable business"
          ctaLink="/founders"
          ctaCopy="Click here, to get started"
          />
        </Carousel.Item>
        
      </Carousel>
    
  )
}
