import React, { useState } from "react";
import Model from "../../../components/appModals/normalModel/yourModel";
import { Gallery, LeftArrow, RightArrow} from "./Content.style";

export function Showcase({ visible, onCancel, images }) {
  const [current, setCurrent] = useState(0);

  const handlePrevious = () => {
    if (!current <= 0) {
        const previous = current - 1;
       setCurrent(previous); 
    }
  };

  const handleNext = () => {
    if (!(current >= images.length -1)) {
       const next = current + 1;
       setCurrent(next);
    }
  };

  return (
    <Model visible={visible} onCancel={onCancel}>
      <Gallery>
        <div className="imageHolder">
          <img src={Array.isArray(images) ? images[current] : images} alt="" />
        </div>
        <LeftArrow onClick={handlePrevious}>&#8249;</LeftArrow>
        <RightArrow onClick={handleNext}>&#8250;</RightArrow>
      </Gallery>
    </Model>
  );
}

