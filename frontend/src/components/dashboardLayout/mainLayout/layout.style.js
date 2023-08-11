import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #e6e6e6;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.311);
`;

export const SideBer = styled.div`
  /* background-color: #fff; */
  height: 100%;
  position: relative;
  flex: 0.5;

  @media (max-width: 500px)  {
      flex: 1.2;
    }
`;

export const ChildContainer = styled.div`
  flex: 5;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow-y: auto;

  .smallNav {
    background-color: #d9d9d9;
    height: 45px;
    width: 90%;
    border-radius: 17px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    overflow-x: auto;

    span {
      margin-left: 5%;
      display: flex;
      align-items: center;
      height: 100%;
      width: auto;
      position: relative;
      font-family: Outfit;
      font-size: 16px;
      font-weight: 300;
      line-height: 15px;
      letter-spacing: 0.5px;
      color: rgba(0, 0, 0, 0.5);
      transition: all 0.1s ease-in-out;
      cursor: pointer;

      i {
        font-style: normal;
        pointer-events: none;
      }

      &::after {
        content: "";
        height: 3px;
        width: 0;
        border-radius: 20px;
        position: absolute;
        background: rgba(249, 201, 0, 1);
        left: 0;
        bottom: 7px;
        transition: 0.4s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

export const Child = styled.div`
  width: 90%;
  height: auto;
  min-height: 70%;
  background-color: #d9d9d9;
  border-radius: 20px;
  overflow: auto;
`;
