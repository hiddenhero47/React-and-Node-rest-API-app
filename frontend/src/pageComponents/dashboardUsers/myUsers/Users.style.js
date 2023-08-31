import styled from "styled-components";

export const MyUsers = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
  overflow: auto;

  .user_content {
    width: 100%;
    display: flex;
    flex-direction: column;

    .AppLoader {
      margin-top: 7%;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .noData {
    font-family: Outfit;
    font-size: 30px;
    font-weight: 500;
    margin: 0 auto;
    margin-top: 13%;
  }
`;

export const Container = styled.div`
  width: 90%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.4s ease-in-out;
  display: flex;
  flex-direction: column;

  @media (min-width: 1131px) and (max-width: 1100px) {
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
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #cccccc;
    position: relative;
  }

  .text {
    font-size: 15px;
    font-family: Poppins;
    margin-bottom: 5px;
    color: rgba(16, 31, 61, 1);
  }

  .Textbox {
    padding: 10px;
  }
`;

export const Tooltip = styled.div`
  .btnBox {
    display: flex;
    gap: 60px;

    span {
      cursor: pointer;
      font-size: 22px;
    }
  }
`;

export const Menu = styled.div`
  position: absolute;
  width: 70%;
  height: 60%;
  padding: 5%;
  z-index: 1;
  left: 50%;
  margin-left: -40%;
  border-radius: 10px;
  background-color: rgb(115, 115, 115, 0.6);
  backdrop-filter: blur(8px);
  --webkit-backdrop-filter: blur(8px);

  .close {
    color: rgba(16, 31, 61, 1);
    cursor: pointer;
  }

  p {
    font-family: Outfit;
    font-size: 13px;
    color: rgba(16, 31, 61, 1);
  }

  .submitBtn {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 7px 10px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    .appLoader {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .submitBtn :hover {
    background-color: #45a049;
  }
`;
