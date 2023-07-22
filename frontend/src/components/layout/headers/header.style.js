import styled from "styled-components";

export const NavStyle = styled.nav`
  padding: 0;
  width: 100%;
  height: 164px;
  position: fixed;
  z-index: 5;
  background-color: #fff;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.311);

  .navBody {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .navTop {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .navBox {
      margin-top: 16px;
      display: flex;
      height: 56px;
      width: 69.4%;
      margin-left: 1%;

      .box {
        width: 50%;
        display: flex;
        justify-content: flex-start;
        align-self: center;
      }
      .end {
        justify-content: end;
      }
    }
  }

  .boxHeader {
    width: 100%;
    height: 26.8%;
    display: flex;
    background-color: #e4e4f3;
    z-index: 1;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.311);

    .box {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .socialIcon {
      display: flex;
      gap: 17px;
      margin-top: 0.5%;
      margin-left: auto;
    }

    .timeText {
      font-family: Poppins;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      font-style: normal;
      margin: 8px;
      color: #151515;
    }
  }

  .navBottom {
    position: absolute;
    z-index: 2;
    width: 68.5%;
    height: 41.5%;
    top: 81%;
    left: 50%;
    margin-left: -34.3%;
    background: #151515;
    display: flex;
    align-items: center;

    .nav-options {
      width: 61%;
      justify-content: space-between;
    }

    .navBox {
      height: 65%;
      width: 96.13%;
      padding: 7px 1.92%;
      display: flex;
    }

    .questionsBtn {
      padding: 10px 22px;
      font-family: Urbanist;
      font-size: 0.95rem;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0em;
      background: #1634a1;
      color: #ffffff;
      margin-left: auto;

      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }

  .nowrap {
    white-space: nowrap;
    display: inline-flex;
  }

  .nav-options {
    padding: 0;
    display: flex;
    margin-bottom: auto;
    margin-top: auto;
  }

  .login {
    display: inline-flex;
    margin: 0;
    /* transform: translateX(10vw); */
    /* margin-left: auto; */
    margin-left: 5%;
    margin-right: 10px;
    gap: 7px;
  }

  .list {
    list-style: none;
  }

  .list a {
    text-decoration: none;
    color: #fff;
    font-family: Poppins;
    font-size: 0.95rem;
    /* font-size: 20px; */
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    font-style: normal;
  }

  .list a i {
    font-style: normal;
  }

  .listTop {
    margin: 0;
  }

  .listTop a {
    color: #151515;
    font-weight: normal;
    font-size: 0.7rem;
    font-style: normal;
    font-family: Poppins;
  }

  .listTop button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  .talkTo {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    /* margin-right: 10%; */
    margin-top: auto;
    margin-bottom: auto;

    div {
      white-space: nowrap;
      display: inline-flex;
    }

    & :nth-child(1) {
      font-family: Poppins;
      font-size: 15px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0em;
      color: #151515;
    }

    & :nth-child(2) {
      font-family: Urbanist;
      font-size: 13px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      color: #7e7e7e;
    }
  }

  .middle {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 835px) and (max-width: 961px) {
    .navTop {
      .navBox {
        width: 80%;
        margin-left: 12%;
      }
    }
    .navBottom {
    width: 80%;
    }
  }

  @media (min-width: 500px) and (max-width: 834px) {
    .navTop {
      .navBox {
        width: 95%;
        margin-left: 0;
      }
    }
    .navBottom {
    width: 95%;
    left: 37%;
    }
  }
`;
