import styled from "styled-components";

export const CustomSelectContainer = styled.div`
  position: relative;
  width: 100%; /* Adjust the width as needed */
  margin-top: 8px;
`;

export const CustomSelectValue = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  border: ${(props) =>
    props.$isError && props.$isOpen
      ? "2px solid red"
      : props.$isError
      ? "2px solid red"
      : props.$isOpen
      ? "1px solid blue"
      : "1px solid #ccc"};
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
  position: relative;
  transition: all 0.2s;
  gap: 5px;
  background-color: ${(props) => props.$background && props.$background};

  .placeholder {
    color: #757575;
  }

  .arrow {
    width: 15%;
    height: 100%;
    transition: all 0.4s;
    cursor: pointer;
    pointer-events: none;
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #757575;
  }

  /* .arrow::before {
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    border-left: 0.5em solid transparent;
    border-right: 0.5em solid transparent;
    border-top: 0.5em solid #333;

  } */

  .imageContainer {
    height: 13px;
    width: 13px;
  }
`;

export const SelectOptions = styled.div`
  padding-top: 15px;
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  max-height: 200px; /* Adjust the max-height as needed */
  margin-left: -1px;
  overflow-y: auto;
  border: 1px solid rgb(82, 86, 86, 0.4);
  border-radius: 5px;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  z-index: 1;
  background-color: rgb(82, 86, 86, 0.1);
  background: linear-gradient(
    90deg,
    rgba(51, 51, 51, 0.9570421918767507) 0%,
    rgba(51, 51, 51, 0.8954175420168067) 100%
  );
  transition: all 0.4s;

  & :hover {
    background: DodgerBlue;
    color: #fff;
  }
`;

export const Option = styled.div`
  width: 85%;
  border-radius: 15px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  cursor: pointer;
  color: #ccc;
  gap: 5px;
  background: ${({ selected }) =>
    selected
      ? "linear-gradient(90deg, rgba(77, 77, 77,0.9570421918767507) 0%, rgba(77, 77, 77,0.8954175420168067) 100%)"
      : "transparent"};

  .imageContainer {
    height: 20px;
    width: 20px;
  }
`;

export const ImageHolder = styled.div`
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
`;

export const Error = styled.span`
    margin: 0%;
    margin-bottom: 10px;
    margin-left: 10px;
    font-family: Urbanist;
    font-size: 12px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: -0.01em;
    color: red;
`;
