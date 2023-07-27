import styled from "styled-components";

export const ClientTestimony = styled.div`
  width: 100%;
  height: 740px;
  display: flex;
  justify-content: center;
  background-color: #ffffff;

  .Testimony {
    margin-top: 60px;
    width: 65%;
    height: 81.1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    width: 60.8%;
    height: 18%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 15px;

    .tab {
      margin-left: 0;
      padding: 10px 13px;
      font-family: Urbanist;
      font-size: 16px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0em;
      background: #151515;
      color: #fff;
    }

    h3 {
      font-family: PoppinsBold;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0em;
      margin: 0;
      color: #1634a1;
    }
  }

  @media (min-width: 1161px) and (max-width: 1190px) {
    .Testimony {
      width: 75%;
    }
  }

  @media (min-width: 1011px) and (max-width: 1160px) {
    .Testimony {
      width: 85%;
    }
  }

  @media (min-width: 801px) and (max-width: 1010px) {
    .Testimony {
      width: 95%;
    }
  }

  @media (min-width: 701px) and (max-width: 800px) {
    height: 1070px;

    .title {
      width: 100%;
    }

    .Testimony {
      width: 80%;
    }
  }

  @media (min-width: 601px) and (max-width: 700px) {
    height: 1830px;

    .title {
      width: 100%;
      height: 10%;
    }

    .Testimony {
      width: 45%;
      height: 90%;
    }
  }

  @media (min-width: 501px) and (max-width: 600px) {
    height: 1900px;

    .title {
      width: 100%;
      height: 10%;
    }

    .Testimony {
      width: 54%;
      height: 95%;
    }
  }

  @media (min-width: 401px) and (max-width: 500px) {
    height: 1900px;

    .title {
      width: 100%;
      height: 10%;
    }

    .Testimony {
      width: 65%;
      height: 95%;
    }
  }

  @media (max-width: 400px) {
    height: 1800px;

    .title {
      width: 100%;
      height: 10%;
    }

    .Testimony {
      width: 80%;
      height: 95%;
    }
  }
`;

export const ClientGrid = styled.div`
  width: 100%;
  height: 79.6%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3%;
  row-gap: 7%;

  @media (min-width: 801px) and (max-width: 909px) {
    column-gap: 2%;
    row-gap: 3.8%;
  }

  @media (min-width: 701px) and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 2%;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    height: 90%;
    row-gap: 1.2%;
  }
`;

export const ClientBox = styled.div`
  border: 1px solid #7b7b7b;
  border-radius: 8px;
  padding: 20px 20px;

  .text {
    margin: 0;
    font-family: Urbanist;
    font-size: 13.5px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    color: #181818;
    margin-bottom: 16px;
  }

  .clientBlock {
    width: 170px;
    height: 40px;
    display: flex;
  }

  .imageContainer {
    margin-right: 5%;
    height: 40px;
    width: 40px;
  }

  .imageHolder {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .name {
    margin-left: 0;
    font-family: Poppins;
    font-size: 17px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.01em;
    color: #151515;
  }

  .job {
    margin-left: 0;
    font-family: Urbanist;
    font-size: 12px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.02em;
    color: #7b7b7b;
  }
`;
