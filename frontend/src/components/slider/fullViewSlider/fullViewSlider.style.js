import styled from "styled-components";

// width: ${(props) => props.width}px;

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 520px;
  overflow: hidden;
`;

export const Slider = styled.div`
  display: inline-flex;
  /* width: 100%; */
  height: 100%;
  transform: translateX(${(props) => props.translate}px);
  transition: transform 0.5s ease;
`;

export const Slide = styled.div`
  /* flex: 0 0 100%; */
  width: ${(props) => props.width}px;
  height: 100%;
  position: relative;
  transition: transform 0.5s ease;
`;

export const SlideContent = styled.div`
  width: 100%;
  height: 100%;

  .imageHolder {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 2px;
  }
`;

export const Image = styled.img`
  /* width: 100%;
  height: auto; */
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  z-index: 5;
`;

export const Narration = styled.div`
  position: absolute;
  width: 100%;
  height: 22.2%;
  top: 50%;
  margin-top: -6%;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 60%;
    font-family: PoppinsBold;
    font-size: 43px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0em;
    color: rgba(255, 255, 255, 1);
  }

  @media (min-width: 901px) and (max-width: 1000px) {
    span {
      font-size: 38px;
    }
  }

  @media (min-width: 601px) and (max-width: 901px) {
    span {
      font-size: 33px;
    }
  }

  @media (min-width: 401px) and (max-width: 600px) {
    span {
      font-size: 30px;
      line-height: 50px;
    }
  }

  @media (max-width: 400px) {
    span {
      font-size: 6vw;
      line-height: 40px;
    }
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 24px;
  color: white;
`;

export const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

export const RightArrow = styled(ArrowButton)`
  right: 10px;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 100%;
  margin-top: -50px;
  width: 100%;
`;

export const Bullet = styled.span`
  width: ${(props) => (props.$active === "true" ? "17" : "10")}px;
  height: 10px;
  border-radius: ${(props) => (props.$active === "true" ? "20px" : "50px")};
  background-color: ${(props) =>
    props.$active === "true"
      ? "rgba(255, 255, 255, 1)"
      : "rgba(249, 201, 0, 1)"};
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
`;

export const Loader = styled.div`
  width: 100%;
  height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;
