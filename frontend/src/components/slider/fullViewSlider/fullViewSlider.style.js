import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const Slider = styled.div`
  display: flex;
  /* width: ${(props) => props.width}px; */
  transform: translateX(${(props) => props.translate}px);
  transition: transform 0.5s ease;
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
`;

export const SlideContent = styled.div`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
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
  margin-top: 10px;
`;

export const Bullet = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active === "true" ? "#222" : "gray")};
  margin: 0 5px;
  cursor: pointer;
`;
