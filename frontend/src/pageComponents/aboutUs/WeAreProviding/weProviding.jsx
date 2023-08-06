import React from "react";
import { Link } from "react-router-dom";
import {
  ProvideUs,
  Container,
  ImageContainer,
  WriteUp,
} from "./weProviding.style";
import Group from "../../../media/pictures/Group.jpg";

function Provide() {
  return (
    <ProvideUs>
      <Container>
            <div className="writeUp">
                <WriteUp>
                    <span className="header">
                    We are providing the best customer service
                    </span>

                    <p>
                    We are a company that connects the world of real estate and
                    finance. We provide a complete service for the sale, purchase or
                    rental of real estate. Our advantage is more than 15 years of
                    experience and soil in attractive locations in Slovakia with
                    branches in Bratislava and Košice.
                    </p>

                    <p>
                    We have a connection to all banks on the Slovak market, so we can
                    solve everything under one roof. By constantly innovating our
                    business activities, we move forward and we are able to offer
                    truly above-standard services that set us apart from the
                    competition
                    </p>
                </WriteUp>
            </div>

            <div className="picture">
                <ImageContainer>
                    <div className="imageHolder">
                    <img src={Group} alt="" />
                    </div>
                </ImageContainer>
            </div>
      </Container>
      <Link className="btn" to="/contact-us">Learn More</Link>
    </ProvideUs>
  );
}

export default Provide;
