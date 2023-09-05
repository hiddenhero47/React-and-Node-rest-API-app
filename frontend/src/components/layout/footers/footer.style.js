import styled from "styled-components";

export const FooterStyle = styled.footer`
  width: 100%;
  height: 390px;
  background-color: #151515;
  bottom: 0;
  color: #fff;
  margin-top: 34px;

  @media (max-width: 450px) {
    height: 650px;
  }
`;

export const MainFooter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .container {
    /* width: 62.5%;
    height: 79.5%; */
    width: 70%;
    height: 80%;
    margin-top: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .icon {
    width: 100%;
  }

  .fieldBox {
    width: 100%;
    height: 81%;
  }

  .box {
    width: 100%;
    height: 81.9%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
  }

  .socialIcon {
    display: flex;
    gap: 20px;
  }

  .innerBoxWrapper {
    width: 100%;
    height: 80%;
    display: flex;
  }

  .innerBoxOne {
    flex: 2.5;
  }

  .innerBoxTwo {
    flex: 2.1;
    border-left: 1px solid #fff;
    border-right: 1px solid #fff;
    display: flex;
    justify-content: space-around;
  }

  .innerBoxThree {
    flex: 1.2;
    display: flex;
    justify-content: center;
  }

  .list {
    margin: 0;
    padding: 0;
  }

  .list li {
    list-style: none;
    white-space: nowrap;
    font-family: Inter;
    font-size: 11px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    color: #d9d9d9;
  }

  .first {
    font-weight: 700 !important;
    color: #fff !important;
  }

  .foot {
    height: 18%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    /* transform: translateY(19px); */
  }

  .footText {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    .container {
      width: 90%;
    }
  }

  @media (min-width: 501px) and (max-width: 601px) {
    .container {
      width: 95%;
    }

    .innerBoxOne {
      flex: 2;
    }

    .innerBoxTwo {
      flex: 2;
    }

    .innerBoxThree {
      flex: 1;
    }
  }

  @media (min-width: 451px) and (max-width: 500px) {
    .container {
      width: 95%;
    }

    .innerBoxOne {
      flex: 2;
    }

    .innerBoxTwo {
      flex: 2;
    }

    .innerBoxThree {
      flex: 1;
    }
  }

  @media (min-width: 371px) and (max-width: 450px) {
    .container {
      width: 95%;
      height: 90%;
    }

    .icon {
      margin-top: 30px;
    }

    .fieldBox {
      height: 80%;
    }

    .innerBoxWrapper {
      flex-direction: column;
      align-items: center;
      gap: 5%;
    }

    .innerBoxOne {
      flex: unset;
      width: 60%;
    }

    .innerBoxTwo {
      flex: unset;
      width: 60%;
      border-left: 0px;
      border-right: 0px;
      justify-content: space-between;
    }

    .innerBoxThree {
      flex: unset;
      width: 60%;
      justify-content: flex-start;
    }
  }

  @media (min-width: 201px) and (max-width: 370px) {
    .container {
      width: 95%;
      height: 90%;
    }

    .icon {
      margin-top: 30px;
    }

    .fieldBox {
      height: 80%;
    }

    .innerBoxWrapper {
      flex-direction: column;
      align-items: center;
      gap: 5%;
    }

    .innerBoxOne {
      flex: unset;
      width: 70%;
    }

    .innerBoxTwo {
      flex: unset;
      width: 70%;
      border-left: 0px;
      border-right: 0px;
      justify-content: space-between;
    }

    .innerBoxThree {
      flex: unset;
      width: 70%;
      justify-content: flex-start;
    }
  }
`;
