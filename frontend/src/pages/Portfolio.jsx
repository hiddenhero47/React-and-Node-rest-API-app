import React, { useState } from "react";
import styled from "styled-components";
import HeaderTitle from "../components//layout/headerTitle/myHeaderTitle";
import WorkWith from "../components/workWithUs/work";
import ImageGride from "../pageComponents/portfolio/imageGride/gride";
import {
  ImagesOne,
  ImagesTwo,
  ImagesThree,
} from "../pageComponents/portfolio/dummy";
import { PORTFOLIO } from "../pageComponents/portfolio/enum";

const TitleBerar = styled.div`
  width: 100%;
`;

const Style = styled.div`
  width: 100%;

  .work {
    margin-top: 60px;
    margin-bottom: 35px;
  }

  .tab {
    margin-top: 40px;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
  }

  .tabOptions {
    height: 35px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-family: Urbanist;
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.5px;
    color: #151515;
    cursor: pointer;

    span {
      transition: all 0.2s ease-in-out;
    }
  }

  .tabBar {
    width: 100%;
    height: 3px;
    display: flex;
    background-color: #e5e5e5;
    border-radius: 5px;

    .stroller {
      background-color: #f9c900;
      width: 33.33%;
      height: 100%;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;
    }
  }

  .grid {
    margin-top: 32px;
    width: 100%;
  }

  @media (min-width: 451px) and (max-width: 850px) {
    .tab {
      width: 80%;
    }
  }

  @media (max-width: 800px) {
    .tab {
      width: 98%;
    }
  }
`;

function Portfolio() {
  const [currentTab, setCurrentTab] = useState(PORTFOLIO.RES);
  const [position, setPosition] = useState("start");

  const toggleTab = (option) => {
    if (option === 1) {
      setCurrentTab(PORTFOLIO.RES);
      setPosition("start");
    }

    if (option === 2) {
      setCurrentTab(PORTFOLIO.COM);
      setPosition("center");
    }

    if (option === 3) {
      setCurrentTab(PORTFOLIO.INDUS);
      setPosition("flex-end");
    }
  };
  
  return (
    <>
      <TitleBerar>
        <HeaderTitle page={"Portfolio"} />
      </TitleBerar>

      <Style>
        <div className="tab">
          <div className="tabOptions">
            <span
              style={{ color: currentTab === PORTFOLIO.RES && "#F9C900" }}
              onClick={() => toggleTab(1)}
            >
              Residential
            </span>
            <span
              style={{ color: currentTab === PORTFOLIO.COM && "#F9C900" }}
              onClick={() => toggleTab(2)}
            >
              Commercial
            </span>
            <span
              style={{ color: currentTab === PORTFOLIO.INDUS && "#F9C900" }}
              onClick={() => toggleTab(3)}
            >
              Industrial
            </span>
          </div>

          <div className="tabBar" style={{ justifyContent: `${position}` }}>
            <div className="stroller" />
          </div>
        </div>

        <div className="grid">
          {currentTab === PORTFOLIO.RES && <ImageGride images={ImagesOne} />}
          {currentTab === PORTFOLIO.COM && <ImageGride images={ImagesTwo} />}
          {currentTab === PORTFOLIO.INDUS && (
            <ImageGride images={ImagesThree} />
          )}
        </div>

        <div className="work">
          <WorkWith />
        </div>
      </Style>
    </>
  );
}

export default Portfolio;
