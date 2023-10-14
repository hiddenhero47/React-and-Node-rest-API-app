import React, { useState, useEffect, useRef } from "react";
import { getElementDimensionsRef } from "../../../appHelpers/dimensions";
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
  Overlay,
  Narration,
  Loader,
} from "./fullViewSlider.style";
import { SliderData } from "./dummy";
import Spinner from "../../loaders/spinners/Spinner";

const ImageSlider = ({AppSliderData, isLoading}) => {

  const content = AppSliderData ?? SliderData;
  
  const sliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideShowTimer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 5000); // Auto slide change every 5 seconds

    return () => {
      clearTimeout(slideShowTimer);
    };
  }, [content.length, currentIndex]);

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

  let NewDimensions = getElementDimensionsRef(sliderRef);

  const [slideWidth, setSlideWidth] = useState(getElementDimensionsRef(sliderRef).width);

  useEffect(() => {
    setSlideWidth(getElementDimensionsRef(sliderRef).width);
  }, [NewDimensions])
  

  return (
    <>
      {isLoading ? (
        <Loader>
          <Spinner />
        </Loader>
      ) : (
        <SliderContainer ref={sliderRef}>
          <Slider
            width={content.length * 100} // Assuming each image takes 100% width
            translate={-currentIndex * getElementDimensionsRef(sliderRef).width}
          >
            {content.map((element, index) => (
              <Slide
                key={index}
                width={slideWidth}
              >
                <SlideContent>
                  <div className="imageHolder">
                    <Image src={element.pictures} alt={`Slide ${index}`} />
                  </div>
                </SlideContent>

                {element.narration && (
                  <Narration>
                    <span>{element.narration}</span>
                  </Narration>
                )}

                {element.overlay && <Overlay />}
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
      )}
    </>
  );
};

export default ImageSlider;
