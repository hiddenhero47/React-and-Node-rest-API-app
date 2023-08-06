import styled from "styled-components";

export const Quote = styled.div`
  width: 100%;
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${(props) => props.$images}) no-repeat center/cover;

  span {
    margin-top: 60px;
    margin-bottom: 100px;
    font-family: Urbanist;
    font-size: 28px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 1);
  }

  h3 {
    margin: 0;
    font-family: Poppins;
    font-size: 47px;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 0px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
  }

  a {
    margin-top: 160px;
    background-color: rgba(22, 52, 161, 1);
    padding: 17px 23px;
    border-radius: 4px;
    font-family: Urbanist;
    font-size: 17px;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0.8px;
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
  }

  @media (min-width: 585px) and (max-width: 771px) {
    height: 600px;

    span {
      font-size: 22px;
    }

    h3 {
      font-size: 39px;
    }

    a {
      font-size: 14px;
      margin-top: 100px;
    }
  }

  @media (max-width: 584px) {
    height: 650px;
    
    span {
      font-size: 22px;
    }

    h3 {
      font-size: 35px;
    }

    a {
      font-size: 14px;
      margin-top: 100px;
    }
  }
`;
