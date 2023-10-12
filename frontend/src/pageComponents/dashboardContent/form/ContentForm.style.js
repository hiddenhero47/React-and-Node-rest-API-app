import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  /* height: auto; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  
  .title {
    margin-top: 0;
  }
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-auto-rows: auto;
  justify-content: space-between;
  grid-auto-flow: dense;
  column-gap: 60px;
  row-gap: 20px;
  margin-top: 15px;
  margin-bottom: 15px;

  .grid-item {
    padding: 10px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-family: Outfit;
    height: 100%;
    background-color: rgba(16, 31, 61, 0.789);
    color: white;
    transition: all 0.2s;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      box-shadow: 0px 0px 15px rgba(38, 38, 38, 0.611);
    }
}

`;

export const Form = styled.form`
  border-radius: 5px;
  background-color: #bfbfbf;
  padding: 20px;
  min-width: 343px;
  margin-bottom: 30px;
 
  .submitBtn {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-family: Outfit;

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
  .myLabel {
    font-family: Outfit;
  }

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
    font-family: Outfit;
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

export const Radio = styled.div`
  /* position: relative; */
  width: 100%;
  margin-bottom: 10px;

  h3 {
    font-family: Outfit;
    font-size: 17px;
  }

  .radioBox {
    width: 100%;
    display: flex;
    gap: 5%;
  }

  input[type="radio"] {
    position: absolute;
    visibility: hidden;
  }

  label {
    position: relative;
    font-weight: 400;
    font-size: 13px;
    font-family: Outfit;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    transition: all 0.25s linear;

    &:hover {
      color: #ffffff;

      .check {
        border: 3px solid #ffffff;
      }
    }
  }

  .check {
    position: relative;
    border: 3px solid #aaaaaa;
    border-radius: 100%;
    height: 15px;
    width: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: border 0.25s linear;

    &::before {
      display: block;
      content: "";
      border-radius: 100%;
      height: 7px;
      width: 7px;
      transition: background 0.25s linear;
    }
  }

  input[type="radio"]:checked ~ label .check {
    border: 3px solid #0dff92;
  }

  input[type="radio"]:checked ~ label .check::before {
    background: #0dff92;
  }

  input[type="radio"]:checked ~ label {
    color: #0dff92;
  }
`;

export const File = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .FileInput {
    width: 339px;
    height: 136px;
    margin: auto;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px dashed #9aa3db;
    border-radius: 5px;
  }

  .FileInput.isError {
    border: 2px dashed red;
  }

  .FileInput.isError ~ .error_text_file {
    display: block;
  }

  .isDragging {
    border: 2px solid #ffa416;
  }

  .FileInput input[type="file"] {
    display: none;
    width: auto;
  }

  .FileLabel {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .icon {
    font-size: 35px;
  }

  .FileText {
    margin-top: 20px;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }

  .Browse {
    color: #1f44c6;
    cursor: pointer;
  }

  .error_text_file {
    margin-top: 5px;
    color: red;
    font-family: "Outfit";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    display: none;
  }

  .isSelected {
    width: 100%;
    display: flex;
    gap: 5px;

    .Details {
      padding: 10px;
      border-radius: 6px;
      background-color: rgb(25, 51, 77, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;

      .isIcon {
        font-size: 30px;
      }

      .text {
        font-size: 11px;
        font-family: Outfit;
      }
    }

    .clear {
      cursor: pointer;
      padding: 10px;
      border-radius: 6px;
      background-color: rgb(255, 51, 51, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 11px;
      font-family: Outfit;

      .isIcon {
        font-size: 30px;
      }

      &:hover {
        background-color: rgb(255, 51, 51, 0.5);
      }
    }
  }
`;
