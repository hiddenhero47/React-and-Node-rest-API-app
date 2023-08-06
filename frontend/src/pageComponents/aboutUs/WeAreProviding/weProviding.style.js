import styled from "styled-components";

export const ProvideUs = styled.div`
  width: 100%;
  height: 625px;
  background-color: rgba(244, 244, 244, 1);
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

  .btn {
    margin: auto;
    border: 1px solid rgba(22, 52, 161, 1);
    padding: 17px 23px;
    border-radius: 2px;
    font-family: Urbanist;
    font-size: 17px;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0.8px;
    text-decoration: none;
    color: rgba(22, 52, 161, 1);
  }

  @media (min-width: 581px) and (max-width: 751px) {
    height: 500px;
  }

  @media (min-width: 502px) and (max-width: 581px) {
    height: 550px;
  }

  @media (min-width: 431px) and (max-width: 501px) {
    height: 590px;
  }

  @media (min-width: 396px) and (max-width: 430px) {
    height: 650px;
  }

  @media (min-width: 341px) and (max-width: 395px) {
    height: 660px;
    .btn {
      font-size: 15px;
      padding: 15px 18px;
    }
  }

  @media (max-width: 340px) {
    height: 720px;
    .btn {
      font-size: 15px;
      padding: 15px 18px;
    }
  }
`;

export const Container = styled.div`
  margin-top: 40px;
  width: 65%;
  height: 75.4%;
  height: 73%;
  display: flex;
  gap: 7%;

  .picture {
    width: 45.75%;
    height: 100%;
  }

  .writeUp {
    width: 45.75%;
    height: 100%;
  }

  @media (min-width: 971px) and (max-width: 1190px) {
    width: 80%;
  }

  @media (min-width: 861px) and (max-width: 970px) {
    width: 90%;
  }

  @media (min-width: 751px) and (max-width: 860px) {
    width: 90%;
  }

  @media (max-width: 750px) {
    width: 90%;

    .picture {
      display: none;
    }

    .writeUp {
      width: 100%;
    }
  }
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;

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
`;

export const WriteUp = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    font-family: Poppins;
    font-size: 32px;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: 0px;
    color: rgba(22, 52, 161, 1);
    /* white-space: nowrap;
    display: inline-flex; */
  }

  p {
    font-family: Urbanist;
    font-size: 17px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0px;
    color: rgba(9, 22, 56, 1);
  }

  @media (min-width: 751px) and (max-width: 860px) {
    .header {
      font-size: 28px;
      margin: 0;
    }

    p {
      font-size: 15px;
      margin: 7px 0;
    }
  }

  @media (max-width: 395px) {
    .header {
      font-size: 28px;
      margin: 0;
    }

    p {
      font-size: 15px;
      margin: 7px 0;
    }
  }
`;
