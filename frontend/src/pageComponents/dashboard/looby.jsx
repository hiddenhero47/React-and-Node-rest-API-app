import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Style = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .wordOne {
    margin-top: 0%;
    font-family: Poppins;
    font-size: 50px;
    font-weight: 700;
    line-height: 90px;
    letter-spacing: 0em;
  }

  .wordTwo {
    font-family: Poppins;
    font-size: 30px;
    font-weight: 600;
    line-height: 50px;
    letter-spacing: 0px;
    text-align: left;
  }
`;

function MyLooby() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Style>
      <span className="wordOne">{`Welcome to the Dashboard ${user?.name}`}</span>
      <span className="wordTwo">
        your
        {user?.role === "admin" ? ` an ${user?.role} ` : ` a ${user?.role} `}
        user
      </span>
    </Style>
  );
}

export default MyLooby;
