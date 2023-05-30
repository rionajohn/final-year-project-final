import React, { useState } from 'react';

import windows_screen from '../images/magic-moment.png';
import hummmingbird_1 from '../images/hummingbird-1.png';
import hummmingbird_2 from '../images/hummingbird-2.png';

import '../css_componets/humming_bird.css';

import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className = "Hummingbird" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src= { windows_screen } 
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3>The first time you turn it on you will see this screen</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={ hummmingbird_1 }
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Introduction to a humming bird</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={ hummmingbird_2 }
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>The humming bird will follow your hand</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ImageCarousel