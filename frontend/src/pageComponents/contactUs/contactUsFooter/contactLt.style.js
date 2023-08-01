import styled from "styled-components";

export const ContactCompany = styled.div`
  width: 100%;
  height: 530px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(22, 52, 161, 1);

  @media (min-width: 501px) and (max-width: 800px) {
    height: 600px;
  }
`;

export const Container = styled.div`
  width: 53.23%;
  height: 54.4%;
  display: flex;

  @media (min-width: 1161px) and (max-width: 1190px) {
    width: 60%;
  }

  @media (min-width: 1001px) and (max-width: 1160px) {
    width: 70%;
  }

  @media (min-width: 801px) and (max-width: 1000px) {
    width: 85%;
  }

  @media (min-width: 661px) and (max-width: 800px) {
    width: 70%;
    height: 90%;
    flex-direction: column;
  }

  @media (min-width: 591px) and (max-width: 660px) {
    width: 80%;
    height: 90%;
    flex-direction: column;
  }

  @media (max-width: 590px) {
    width: 90%;
    height: 90%;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 59%;

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

  @media (min-width: 591px) and (max-width: 800px) {
    width: 100%;
    height: 60%;
  }

  @media (max-width: 590px) {
    width: 100%;
    height: 60%;
  }
`;

export const WriteUp = styled.div`
  width: 41%;
  padding: 45px 32px;
  padding-right: 0;
  display: flex;
  flex-direction: column;

  .heading {
    margin: 0;
    font-family: PoppinsBold;
    font-size: 37px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
    color: rgba(255, 255, 255, 1);
  }

  .up {
    margin-top: 15px;
    height: 78px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .down {
    height: 78px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .text {
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    span {
      font-family: Urbanist;
      font-size: 15px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0.8px;
      color: rgba(255, 255, 255, 1);
    }

    .yellow {
      font-family: Poppins;
      font-size: 12px;
      font-weight: 300;
      line-height: 15px;
      letter-spacing: 0px;
      color: rgba(249, 201, 0, 1);
      margin-bottom: 10px;
    }
  }

  .icon {
    margin-top: 7px;
  }

  @media (min-width: 591px) and (max-width: 800px) {
    width: 100%;
    height: 25%;
    padding-left: 0;

    .wrapper {
        display: flex;
        margin-top: 15px;
    }
    
    .down {
        width: 50%;
    }

    .up {
        margin-top: 0;
        width: 40%;
    }
  }

  @media (max-width: 590px) {
    width: 100%;
    height: 40%;
    padding-left: 20px;
  }
`;
