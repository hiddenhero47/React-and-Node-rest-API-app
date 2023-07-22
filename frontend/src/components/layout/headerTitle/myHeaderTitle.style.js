import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 390px;
  background: url(${(props) => props.$images}) no-repeat center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .title {
    font-family: Poppins;
    font-size: 55px;
    font-weight: 600;
    line-height: 64px;
    letter-spacing: 0px;
    z-index: 2;
    color: #fff;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
