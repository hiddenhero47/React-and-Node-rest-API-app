import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Grid, ImageItem, NoImage } from "./gride.style";
import { classFunction } from "./helpers";
import Showcase from "./galleryShowcase";

function ImageGride({ images, placeHolderText }) {
  const [imageClasses, setImageClasses] = useState([]);
  const [openShowcase, setOpenShowcase] = useState(false);
  const [clickedImage, setClickedImage] = useState(0);

  useEffect(() => {
    const fetchImageClasses = async () => {
      const classNames = await Promise.all(
        images.map((image) => classFunction(image))
      );
      setImageClasses(classNames);
    };

    if (images) {
      fetchImageClasses();
    }
  }, [images]);

  const handelGallery = (index) => {
    setClickedImage(index);
    setOpenShowcase(true);
  };

  return (
    <>
      {images ? (
        <Container>
          <Grid>
            {images.map((image, index) => (
              <div className={`content ${imageClasses[index]}`} key={index}>
                <div
                  className="imageHolder"
                  key={index}
                  onClick={() => {
                    handelGallery(index);
                  }}
                >
                  <ImageItem key={index} src={image} alt={`Image ${index}`} />
                </div>
              </div>
            ))}
          </Grid>
        </Container>
      ) : (
        <NoImage>{placeHolderText}</NoImage>
      )}
      <Showcase
        visible={openShowcase}
        onCancel={() => {setOpenShowcase(false)}}
        index={clickedImage}
        images={images}
      />
    </>
  );
}

ImageGride.defaultProps = {
  placeHolderText: "no image",
};

ImageGride.propTypes = {
  images: PropTypes.array.isRequired,
  placeHolderText: PropTypes.string,
};

export default ImageGride;
