import React from "react";
import PropTypes from "prop-types";
import { ModalStyle } from "./yourModel.style";

function Model({ visible, onCancel, children }) {
  if (visible) {
    return (
      <ModalStyle>
        <div className="container">
          <div className="child">{children}</div>
          <div className="overlay" onClick={onCancel} />
        </div>
      </ModalStyle>
    );
  } else {
    return null; // Return null when visible is false
  }
}

Model.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Model;
