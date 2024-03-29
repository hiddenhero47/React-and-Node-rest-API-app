import styled from 'styled-components';

export const MyContent = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;
  overflow: auto;

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

  .gridBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-bottom: 30px;
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
    cursor: pointer;
    text-decoration: none;
    color: #171717;
    margin: 0;
  }

  .imageContainer {
  }

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
  width: 80vw;
  height: 80vh;
  background-color: rgb(23, 23, 23, 0.98);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.311);

  .imageHolder {
    display: flex;
    justify-content: center;
    width: 80%;
    height: 90%;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    transition: all 0.4s ease-in-out;

    img {
      /* width: 100%; */
      height: 100%;
      border-radius: 5px;
      /* position: absolute;
      left: 0;
      top: 0; */
      object-fit: cover;
      pointer-events: none;
    }
  }

  @media (min-width: 741px) and (max-width: 800px) {
   height: 70vh;
   width: 75vw;
  }

  @media (min-width: 601px) and (max-width: 740px) {
   height: 70vh;
   width: 90vw;
  }

  @media (max-width: 600px) {
   height: 60vh;
   width: 98vw;
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
  border-radius: 10px;
`;

export const LeftArrow = styled(ArrowButton)`
  left: 10px;
`;

export const RightArrow = styled(ArrowButton)`
  right: 10px;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-auto-rows: auto;
  justify-content: space-between;
  grid-auto-flow: dense;
  column-gap: 30px;
  row-gap: 20px;

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
