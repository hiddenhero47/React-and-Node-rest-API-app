import React from "react";
import styled from "styled-components";
import HeaderTitle from "../components/layout/headerTitle/myHeaderTitle";
import OurServices from "../components/services/services";
import WorkWith from "../components/workWithUs/work";

const TitleBerar = styled.div`
  width: 100%;
`;

const Style = styled.div`
  width: 100%;

  .services {
    margin-top: 60px;
  }

  .work {
    margin-top: 60px;
    margin-bottom: 35px;
  }
`;


function Services() {
  return (
    <>
      <TitleBerar>
        <HeaderTitle page={"Services"} />
      </TitleBerar>

      <Style>

        <div className="services">
          <OurServices />
        </div>

        <div className="work">
          <WorkWith />
        </div>

      </Style>
    </>
  );
}

export default Services;
