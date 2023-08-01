import React from "react";
import {
  ContactCompany,
  Container,
  ImageContainer,
  WriteUp,
} from "./contactLt.style";
import Image from "../../../media/pictures/Image.jpg";
import { CallWite, MailWite } from "../../../components/icons/mail&CallIcon";

function ContactMe() {
  const phoneNumberOne = "+ 3 564 8902 801";
  const phoneNumberTwo = "+ 3 489 9049 352";
  const emailOne = "satna.consult@gmail.com";
  const emailTwo = "satnaworldwide@gmail.com";
  return (
    <ContactCompany>
        <Container>
            <ImageContainer>
              <div className="imageHolder">
                <img src={Image} alt="" />
              </div>
            </ImageContainer>

            <WriteUp>
              <h3 className="heading">Contact</h3>

              <div className="wrapper">
                <div className="up">
                    <div className="call icon">
                      <CallWite width={45} height={45} />
                    </div>

                    <div className="callText text">
                      <span className="yellow">Company Phones</span>
                      <span>{phoneNumberOne}</span>
                      <span>{phoneNumberTwo}</span>
                    </div>
                </div>

                <div className="down">
                  <div className=" email icon">
                    <MailWite width={45} height={45} />
                  </div>

                  <div className="emailText text">
                      <span className="yellow">Company Emails</span>
                      <span>{emailOne}</span>
                      <span>{emailTwo}</span>
                    </div>

                </div>
              </div>
            </WriteUp>
        </Container>
    </ContactCompany>
  );
}

export default ContactMe;
