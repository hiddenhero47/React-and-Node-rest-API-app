import React, { useState, useEffect, useRef } from "react";
import {getElementDimensionsRef} from "../../../appHelpers/dimensions";
import pic1 from "../../../media/pictures/pic1.jpg";
import pic2 from "../../../media/pictures/pic2.jpg";
import pic3 from "../../../media/pictures/pic3.jpg";
import pic4 from "../../../media/pictures/pic4.jpg";
import pic5 from "../../../media/pictures/pic5.jpg";
import pic6 from "../../../media/pictures/pic6.jpg";
import {
  SliderContainer,
  Slider,
  Slide,
  SlideContent,
  Image,
  LeftArrow,
  RightArrow,
  Navigation,
  Bullet,
} from "./fullViewSlider.style";

const content = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  // Add more image URLs here
];
  
  const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const slideShowTimer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
      }, 5000); // Auto slide change every 5 seconds
  
      return () => {
        clearTimeout(slideShowTimer);
      };
    }, [currentIndex]);
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? content.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    };
  
    const handleBulletClick = (index) => {
      setCurrentIndex(index);
    };

    const sliderRef = useRef(null);

    return (
      <SliderContainer ref={sliderRef}>
        <Slider
          width={content.length * 100} // Assuming each image takes 100% width
          translate={-currentIndex * getElementDimensionsRef(sliderRef).width}
        >
          {content.map((element, index) => (
            <Slide key={index}>
              <SlideContent>
                <Image src={element} alt={`Slide ${index}`} />
              </SlideContent>
            </Slide>
          ))}
        </Slider>
        <LeftArrow onClick={handlePrevious}>&#8249;</LeftArrow>
        <RightArrow onClick={handleNext}>&#8250;</RightArrow>
        <Navigation>
          {content.map((_, index) => (
            <Bullet
              key={index}
              $active={index === currentIndex ? "true" : "false"}
              onClick={() => handleBulletClick(index)}
            />
          ))}
        </Navigation>
      </SliderContainer>
    );
  };
  
  export default ImageSlider;