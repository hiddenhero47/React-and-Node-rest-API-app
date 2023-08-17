import styled from 'styled-components';

export const MyGoals = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;

  .user_goals {
    width: 100%;
    display: flex;
    flex-direction: column;

    .AppLoader {
      margin-top: 7%;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Container = styled.div`
  width: 90%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.4s ease-in-out;

  @media (min-width: 1131px) and (max-width: 1100px) {
   
  }
`;

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;

  .content {
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #cccccc;
  }

  .Textbox {
    padding: 10px;
  }

  .btnBox {
    display: flex;
    gap: 60px;

    span {
      cursor: pointer;
      font-size: 22px;
    }
  }
`;
