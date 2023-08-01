import React from "react";
import styled from "styled-components";
import HeaderTitle from "../components//layout/headerTitle/myHeaderTitle";
import ContactForm from "../pageComponents/contactUs/myContactUsForm/contact";
import ContactMe from "../pageComponents/contactUs/contactUsFooter/contactLt"

const TitleBerar = styled.div`
  width: 100%;
`;

const Style = styled.div`
  width: 100%;

  .me {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 15px;
  }
`;

function ContactUs() {
  return (
    <>
      <TitleBerar>
        <HeaderTitle page={"Contact Us"} />
      </TitleBerar>
      <Style>
        <ContactForm />
        <div className="me">
          <ContactMe />
        </div>
      </Style>
    </>
  );
}

export default ContactUs;
