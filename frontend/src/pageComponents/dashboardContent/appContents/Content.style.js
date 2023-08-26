import styled from 'styled-components';

export const MyContent = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;

  .user_content {
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

  .noData {
    font-family: Outfit;
    font-size: 30px;
    font-weight: 500;
    margin: 0 auto;
    margin-top: 13%;
  }
`;

export const Container = styled.div`
  width: 90%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.4s ease-in-out;
  display: flex;
  flex-direction: column;

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

export const Gallery = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .imageHolder {
    width: 90%;
    height: 90%;
    overflow: hidden;
    position: relative;
    transition: all 0.4s ease-in-out;

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      pointer-events: none;
    }
  }
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #333;
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

export const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

export const RightArrow = styled(ArrowButton)`
  right: 10px;
`;

