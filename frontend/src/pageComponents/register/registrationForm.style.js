import styled from "styled-components";

export const MyForm = styled.form`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;

  .submitBtn {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    .appLoader {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .submitBtn :hover {
    background-color: #45a049;
  }
`;

export const FormControl = styled.div`
  .myInput {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .myInput.isError {
    border: 2px solid red;
    margin-bottom: 5px;
  }

  .error {
    margin: 0%;
    margin-bottom: 10px;
    margin-left: 10px;
    font-family: Urbanist;
    font-size: 12px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: -0.01em;
    color: red;
  }
`;
