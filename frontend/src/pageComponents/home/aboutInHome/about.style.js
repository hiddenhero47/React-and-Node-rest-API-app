import styled from "styled-components";

export const Container = styled.div`
  background: #f4f4f4;
  width: 100%;
  height: 600px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

  .btn {
    padding: 5px 23px;
    margin: auto 0;
    margin-left: auto;
    margin-right: 28.5%;
    list-style: none;
    border: 1px solid #1634a1;

    a {
      text-decoration: none;
      font-family: UrbanistBold;
      font-size: 15px;
      font-weight: 800;
      line-height: 19px;
      letter-spacing: 0em;
      color: #1634a1;
    }
  }

  @media (min-width: 1086px) and (max-width: 1190px) {
    .btn {
        margin-right: 25%;
    }
  }

  @media (min-width: 871px) and (max-width: 1085px) {
    .btn {
        margin-right: 19%;
    }
  }

  @media (min-width: 780px) and (max-width: 870px) {
    .btn {
        margin-right: 16%;
    }
  }

  @media (min-width: 601px) and (max-width: 780px) {
    .btn {
        margin-left: 0;
        margin-right: auto;
        margin-left: 14%;
    }
  }

  @media (max-width: 600px) {
    height: 730px;

    .btn {
        margin-left: 0;
        margin-right: auto;
        margin-left: 7%;
    }
  }
`;

export const InnerContainer = styled.div`
  margin-top: 7%;
  width: 61.7%;
  height: 59%;
  display: flex;

  .imageContainer {
    padding-left: 5.15%;
    padding-top: 6%;
    margin-right: 11.9%;
    height: 87%;
    width: 53%;
  }

  .imageHolder {
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

  .writeUp {
    width: 30%;
  }

  .title {
    font-family: PoppinsBold;
    font-size: 33px;
    font-weight: 700;
    line-height: 10px;
    letter-spacing: 0px;
    text-align: left;
    color: #1634a1;
  }

  .text {
    font-family: Outfit;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0px;
    text-align: left;
    color: #091638;
  }

  @media (min-width: 1086px) and (max-width: 1190px) {
    width: 70%;
  }

  @media (min-width: 871px) and (max-width: 1085px) {
    width: 85%;
  }

  @media (min-width: 781px) and (max-width: 870px) {
    width: 95%;
  }

  @media (min-width: 601px) and (max-width: 780px) {
    width: 70%;
    height: 70%;
    flex-direction: column;

    .imageContainer {
        width: 80%;
        height: 50%;
    }

    .writeUp {
        width: 100%;
        height: 50%;
    }
  }

  @media (max-width: 600px) {
    width: 85%;
    height: 70%;
    flex-direction: column;

    .imageContainer {
        width: 100%;
        height: 50%;
        padding: 0;
        margin: 0;
    }

    .writeUp {
        width: 100%;
        height: 50%;
    }
  }
`;
