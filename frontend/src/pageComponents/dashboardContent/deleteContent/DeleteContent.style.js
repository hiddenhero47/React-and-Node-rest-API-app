import styled from 'styled-components';

export const DeleteMe = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .errorText {
    display: flex;
    align-items: center;

    i {
      color: red;
      margin-right: 10px;
    }
  }

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