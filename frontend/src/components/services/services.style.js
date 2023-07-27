import styled from "styled-components";

export const Services = styled.div`
  width: 100%;
  height: 770px;
  display: flex;
  justify-content: center;
  background-color: #f9c900;

  .service {
    margin-top: 6%;
    width: 61.9%;
    height: 81.1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    width: 60.8%;
    height: 15.7%;
    text-align: center;

    h3 {
      font-family: PoppinsBold;
      font-size: 35px;
      font-weight: 700;
      letter-spacing: 0em;
      margin: 0;
    }

    p {
      margin: 0;
      font-family: Outfit;
      font-size: 14px;
      font-weight: 400;
      line-height: 15px;
      letter-spacing: 0em;
    }
  }

  @media (min-width: 1161px) and (max-width: 1190px) {
    .service {
      width: 70%;
    }
  }

  @media (min-width: 1011px) and (max-width: 1160px) {
    .service {
      width: 80%;
    }
  }

  @media (min-width: 801px) and (max-width: 1010px) {
    .service {
      width: 95%;
    }
  }

  @media (min-width: 701px) and (max-width: 800px) {
    height: 1050px;

    .title {
      width: 100%;
    }

    .service {
      margin-top: 9%;
      width: 70%;
    }
  }

  @media (min-width: 501px) and (max-width: 700px) {
    height: 1720px;

    .title {
      width: 100%;
      height: 10%;
    }

    .service {
      margin-top: 10%;
      width: 50%;
      height: 90%;
    }
  }

  @media (min-width: 401px) and (max-width: 500px) {
    height: 1780px;

    .title {
      width: 100%;
      height: 10%;
    }

    .service {
      margin-top: 13%;
      width: 62%;
      height: 90%;
    }
  }

  @media (max-width: 400px) {
    height: 1780px;

    .title {
      width: 100%;
      height: 10%;
    }

    .service {
      margin-top: 13%;
      width: 73%;
      height: 90%;
    }
  }
`;

export const Gride = styled.div`
  width: 100%;
  height: 79.6%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2.1%;
  row-gap: 4%;

  @media (min-width: 701px) and (max-width: 800px) {
    height: 85%;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    height: 95%;
    row-gap: 1.5%;
  }
`;

export const Box = styled.div`
  min-height: 48%;
  background: #151515;
  padding: 30px 25px;

  h5 {
    margin: 0;
    margin-top: 15px;
    font-family: PoppinsBold;
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    color: #f9c900;
    white-space: nowrap;
  }

  p {
    margin: 0;
    margin-top: 10px;
    font-family: Urbanist;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    color: #d2d2d2;
    margin-bottom: 23px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-family: Urbanist;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.05em;
  }

  @media (max-width: 800px) {
    min-height: unset;
  }
`;
