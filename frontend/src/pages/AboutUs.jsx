import React from "react";
import styled from "styled-components";
import HeaderTitle from "../components//layout/headerTitle/myHeaderTitle";
import Provide from "../pageComponents/aboutUs/WeAreProviding/weProviding";
import Appointment from "../pageComponents/aboutUs/letsBuildSomething/letsBuild";
import TheTeam from "../pageComponents/aboutUs/meetTheTeam/team"

const TitleBerar = styled.div`
  width: 100%;
`;

const Style = styled.div`
  width: 100%;

  .provide {
    margin-top: 70px;
    width: 100%;
  }

  .appoint {
    margin-top: 70px;
    width: 100%;
  }

  .team {
    margin-top: 70px;
    width: 100%;
    margin-bottom: 30px;
  }
`;

function AboutUs() {
  return (
    <>
      <TitleBerar>
        <HeaderTitle page={"About Us"} />
      </TitleBerar>
      <Style>
          <div className="provide">
            <Provide />
          </div>

          <div className="appoint">
            <Appointment />
          </div>

          <div className="team">
            <TheTeam />
          </div>
      </Style>
    </>
  );
}

export default AboutUs;
