import styled from "styled-components";

export const Contents = styled.div`
  width: 100%;
  height: 630px;
  display: flex;
  justify-content: center;

  @media (min-width: 501px) and (max-width: 920px) {
    height: 1100px;
  }

  @media (min-width: 356px) and (max-width: 500px) {
    height: 1300px;
  }

  @media (max-width: 355px) {
    height: 1000px;
  }
`;

export const MyTeam = styled.div`
  margin-top: 60px;
  /* width: 69%;
  height: 65.2%; */
  height: 83%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .headerBox {
    width: 54.1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 39px;
  }

  .header {
    margin: 0;
    font-family: PoppinsBold;
    font-size: 29px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    columns: rgba(28, 39, 82, 1);
    white-space: nowrap;
    display: inline-flex;
  }

  .paragraph {
    margin: 0;
    margin-top: 30px;
    font-family: Inter;
    font-size: 15px;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0px;
    text-align: left;
    columns: rgba(9, 22, 56, 1);
  }


  @media (min-width: 1086px) and (max-width: 1190px) {
    width: 75%;
  }

  @media (min-width: 921px) and (max-width: 1086px) {
    width: 85%;
  }

  @media (min-width: 771px) and (max-width: 920px) {
    height: 90%;
    width: 70%;
  }

  @media (min-width: 671px) and (max-width: 770px) {
    height: 90%;
    width: 80%;
  }

  @media (min-width: 586px) and (max-width: 670px) {
    height: 90%;
    width: 90%;
  }

  @media (min-width: 521px) and (max-width: 585px) {
    height: 78%;
    width: 90%;
  }

  @media (min-width: 501px) and (max-width: 521px) {
    height: 75%;
    width: 90%;
  }

  @media (min-width: 356px) and (max-width: 500px) {
    height: 95%;
    width: 68%;

    .paragraph {
        display: none;
    }
  }

  @media (max-width: 355px) {
    height: 95%;
    width: 73%;

    .paragraph {
        display: none;
    }
  }
`;

export const Team = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 71.42%;
  gap: 2.3%;

  @media (min-width: 501px) and (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
    height: 80%;
  }

  @media (min-width: 356px) and (max-width: 500px) {
    grid-template-columns: 1fr;
    height: 87%;
  }

  @media (max-width: 355px) {
    grid-template-columns: 1fr;
    height: 90%;
  }
`;

export const Teammates = styled.div`
  border: 1px solid rgba(28, 39, 82, 0.2);
  width: 100%;
  border-radius: 4px;

  .box {
    height: 89%;
    width: 85%;
    padding: 7.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imageContainer {
    height: 80%;
    width: 100%;
  }

  .imageHolder {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    border-radius: 2px;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
    }
  }

  .titleTeam {
    margin-top: 8%;
    width: 55.6%;
    height: 12%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .titleTeamOne {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 900;
      line-height: 20px;
      letter-spacing: 0em;
      color: rgba(28, 39, 82, 1);
    }

    .titleTeamTwo {
      font-family: Inter;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0em;
      color: rgba(126, 126, 126, 1);
    }
  }
`;
