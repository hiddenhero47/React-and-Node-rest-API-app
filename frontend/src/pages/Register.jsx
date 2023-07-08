import React from "react";
import styled from "styled-components";
import RegistrationForm from "../pageComponents/register/myRegistrationForm";
import { FaUser } from "react-icons/fa";

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

function Register() {
  return (
    <Style>
      <section style={{ display: "flex" }}>
        <h1 className="center primary">
          <FaUser /> Register
        </h1>
      </section>
      <p className="center seconder">Please create an account</p>
      <section className="form-container">
        <RegistrationForm />
      </section>
    </Style>
  );
}

export default Register;
