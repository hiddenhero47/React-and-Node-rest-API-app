import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, InnerContainer } from "./work.style";
import Photo from "../../media/pictures/Photo.png";

function WorkWith() {
  return (
    <Container>
      <InnerContainer>
        <div className="imageContainer">
          <div className="imageHolder">
            <img src={Photo} alt="no image" />
          </div>
        </div>

        <div className="writeUp">
          <h3 className="title">Work with us</h3>

          <p className="text textOne">
            We are a company that connects the world of real estate and finance.
            We provide a complete service for the sale, purchase or rental of
            real estate. Our advantage is more than 15 years of experience and
            soil in attractive locations in Slovakia with branches in Bratislava
            and Košice.
          </p>

          <p className="text textTwo">
            We have a connection to all banks on the Slovak market, so we can
            solve everything under one roof. By constantly innovating our
            business activities, we move forward and we are able to offer truly
            above-standard services that set us apart from the competition.
          </p>
        </div>
      </InnerContainer>
      <span className="btn">
        <Link to="/ContactUs">Contact Us</Link>
      </span>
    </Container>
  );
}

export default WorkWith;
