import styled from "styled-components";

export const Container = styled.div`
  /* height: 1495px; */
  width: 70%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.4s ease-in-out;
  /* max-height: 1500px; */

  /* @media (min-width: 1101px) and (max-width: 1190px) {
    width: 70%;
  } */

  @media (min-width: 1131px) and (max-width: 1100px) {
    width: 75%;
  }

  @media (min-width: 963px) and (max-width: 1130px) {
    width: 80%;
  }

  @media (min-width: 801px) and (max-width: 962px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    width: 95%;
  }
`;

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imageHolder {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      width: 101%;
      height: 101%;
      z-index: 2;
    }
  }

  .width {
    grid-column: span 2;
  }

  .tall {
    grid-row: span 2;
  }

  .big {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

export const ImageItem = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  pointer-events: none;

  /* max-width: 100%;
  vertical-align: middle;
  display: inline-block; */
`;

export const NoImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Gallery = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .imageHolder {
    width: 90%;
    height: 90%;
    overflow: hidden;
    position: relative;
    transition: all 0.4s ease-in-out;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      pointer-events: none;
    }
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #333;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

export const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

export const RightArrow = styled(ArrowButton)`
  right: 10px;
`;
