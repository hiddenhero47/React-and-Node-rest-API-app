import styled from "styled-components";

export const Container = styled.aside`
  position: absolute;
  /* top: 0;
  left: 0; */
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(191, 191, 191, 0.2);
  backdrop-filter: blur(17px);
  --webkit-backdrop-filter: blur(17px);
  border-right: 1px solid rgba(217, 217, 217, 0.7);
  transition: width 0.3s ease;
  border-radius: 0 15px 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    width: 260px;
  }

  .header {
    margin-top: 70px;
    width: 80%;
    height: 50px;
    background-color: rgba(51, 51, 51, 0.1);
    backdrop-filter: blur(17px);
    --webkit-backdrop-filter: blur(17px);
    transition: height 0.3s ease;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      font-size: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(16, 31, 61, 1);
      transition: all 0.8s;
    }

    .text {
      display: flex;
      display: none;
      flex-direction: column;
      margin-left: 2%;
      width: 68%;
      font-family: Inter;
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 0em;
      color: rgba(28, 39, 82, 0.9);
      transition: all 0.5s ease-in-out;

      .email {
        font-size: 14px;
        color: rgba(39, 54, 114, 0.6);
      }
    }
  }

  &:hover .header {
    height: 70px;

    .text {
      display: block;
      display: flex;
    }

    .icon {
      transform: rotate(360deg);
    }
  }

  .line {
    margin-top: 20px;
    width: 90%;
    height: 3px;
    border-radius: 20px;
    background-color: rgba(51, 51, 51, 0.4);
    backdrop-filter: blur(17px);
    --webkit-backdrop-filter: blur(17px);
    transition: Width 0.3s ease;
  }

  .list-wrapper {
    margin: 0;
    padding: 0;
    margin-top: 40px;
    width: 80%;
  }

  .options {
    width: 100%;
    margin: 0;
    list-style: none;
    margin-bottom: 20px;

    a {
      width: 100%;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      /* background-color: rgba(140, 140, 140, 0.1); */
      background-color: rgba(51, 51, 51, 0.1);
      border-radius: 8px;
      transition: all 0.3s;
    }

    .icon {
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(16, 31, 61, 1);
      transition: all 0.7s;
    }

    .text {
      display: inline-flex;
      display: none;
      text-decoration: none;
      font-family: Inter;
      font-size: 13px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      color: rgba(7, 9, 19, 0.7);
      white-space: nowrap;
      margin-left: 10px;
      transition: all 0.5s;
    }

    &:hover a {
      background-color: rgba(140, 140, 140, 0.6);
      transition: all 0.5s;
    }
  }

  &:hover .options {
    .text {
      display: block;
    }

    a {
      justify-content: flex-start;
    }

    .icon {
      margin-left: 20px;
    }
  }

  .btn {
    width: 80%;
    margin: 0;
    list-style: none;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    .btnBox {
      width: 100%;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      /* background-color: rgba(51, 51, 51, 0.1); */
      border-radius: 8px;
      transition: all 0.3s;
    }

    .icon {
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(16, 31, 61, 1);
      transition: all 0.7s;
    }

    .text {
      display: inline-flex;
      display: none;
      text-decoration: none;
      font-family: Inter;
      font-size: 13px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      color: rgba(7, 9, 19, 0.7);
      white-space: nowrap;
      margin-left: 10px;
      transition: all 0.5s;
    }

    &:hover .btnBox {
      background-color: rgba(140, 140, 140, 0.6);
      transition: all 0.5s;
    }
  }

  &:hover .btn {
    .text {
      display: block;
    }

    .btnBox {
      justify-content: flex-start;
    }

    .icon {
      margin-left: 20px;
    }
  }
`;
