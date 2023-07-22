import React from "react";
import PropTypes from "prop-types";
import { Container } from "./myHeaderTitle.style";
import header from "../../../media/pictures/header.jpg"

function HeaderTitle({ images, page, isOverlay }) {
  return (
    <Container $images={images}>
      <span className="title">{page}</span>
      {isOverlay ? (<div className="overlay" />) : ""}
    </Container>
  );
}

HeaderTitle.defaultProps = {
  page: "Page",
  images: header,
  isOverlay: false,
};

HeaderTitle.propTypes = {
  page: PropTypes.string,
  images: PropTypes.string,
  isOverlay: PropTypes.bool,
};

export default HeaderTitle;
