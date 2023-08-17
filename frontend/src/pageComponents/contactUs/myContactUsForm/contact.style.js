import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 630px;
  background: #f4f4f4;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 621px) {
    height: 680px;
  }
`;

export const MyForm = styled.form`
  border-radius: 5px;
  width: 62%;
  height: 48%;
  display: flex;
  flex-direction: column;

  .inputFields {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .topFields {
    width: 100%;
    display: flex;
    gap: 4.8%;
  }

  .box {
    width: 47.6%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .bottomFields {
    width: 100%;
  }

  .submitBtn {
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 130px;
    background-color: rgba(22, 52, 161, 1);
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 2px;
    cursor: pointer;

    .appLoader {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .submitBtn :hover {
    background-color: rgb(53, 91, 227, 1);
  }

  @media (min-width: 801px) and (max-width: 1100px) {
    width: 80%;
  }

  @media (min-width: 621px) and (max-width: 801px) {
    width: 90%;
  }

  @media (max-width: 621px) {
    height: 80%;
    width: 85%;

    .topFields {
      width: 100%;
      display: flex;
      gap: 10px;
      flex-direction: column;
    }

    .box {
        width: 100%;
    }
  }
`;

export const FormControl = styled.div`
  width: 100%;
  color: rgba(0, 0, 0, 0.5);

  .myInput {
    width: 100%;
    padding: 16px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 1px;
    box-sizing: border-box;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
  }

  .myBigInput {
    width: 100%;
    height: 92px;
    max-height: 92px;
    max-width: 100%;
    min-width: 100%;
    min-height: 60px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 1px;
    box-sizing: border-box;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
    font-family: Outfit;
  }

  .myInput.isError {
    border: 1px solid red;
    margin-bottom: 5px;
  }

  .myBigInput.isError {
    border: 1px solid red;
    margin-bottom: 5px;
  }

  .error {
    margin: 0%;
    margin-bottom: 10px;
    margin-left: 10px;
    font-family: Outfit;
    font-size: 12px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: -0.01em;
    color: red;
  }
`;
