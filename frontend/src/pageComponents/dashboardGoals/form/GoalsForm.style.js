import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    margin-top: 0;
  }
`;

export const GoalForm = styled.form`
  border-radius: 5px;
  background-color: #bfbfbf;
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
    background-color: #d9d9d9;
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