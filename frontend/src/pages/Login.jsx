import React from 'react';
import styled from "styled-components";
import LoginForm from "../pageComponents/login/loginForm";
import { FaSignInAlt } from "react-icons/fa";

const Style = styled.div`
  margin-top: 5%;
  font-family: Outfit;
  display: flex;
  flex-direction: column;

  .center {
    margin: 7px auto;
  }

  .primary {
    font-size: 30px;
  }

  .seconder {
    font-size: 20px;
  }
`;

function Login() {
  return (
    <Style>
      <section style={{ display: "flex" }}>
        <h1 className="center primary">
          <FaSignInAlt /> Login
        </h1>
      </section>
      <p className="center seconder">Please Login</p>
      <section className="form-container">
        <LoginForm />
      </section>
    </Style>
  )
}

export default Login