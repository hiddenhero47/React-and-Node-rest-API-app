import React from "react";
import styled from "styled-components";
// import HeaderTitle from "../components/layout/headerTitle/myHeaderTitle";
import SliderContainer from "../components/slider/fullViewSlider/fullViewSlider";
import { LogoText } from "../components/icons/appLogo";
import MyVideo from "../pageComponents/home/video/homeVideo";
import OurServices from "../components/services/services";
import AboutUs from "../pageComponents/home/aboutInHome/about";
import Testimony from "../pageComponents/home/myClient/clientSays"
import AppHooks from '../features/myApp/appHooks'

const TitleBerar = styled.div`
  width: 100%;
`;

const Style = styled.div`
  width: 100%;

  .titleEnd {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    margin-left: 5%;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: 0em;
    color: #151515;
  }

  .our-services {
    margin-top: 45px;
    width: 100%;
    height: auto;
  }
`;

function Home() {
  const searchField = "header";
  const searchString = {searchString: "home"};
  const {data} = AppHooks.receive({ searchField, searchString });
  console.log(data);
  return (
    <>
      <TitleBerar>
        {/* <HeaderTitle page={"Home"} /> */}
        <SliderContainer />
      </TitleBerar>

      <Style>
        <div className="titleEnd">
          <LogoText width={230} height={23} />
          <span className="welcome">Watch how we build your future today!</span>
        </div>

        <MyVideo />

        <div className="our-services">
          <OurServices />
        </div>

        <AboutUs />

        <Testimony />

      </Style>
    </>
  );
}

export default Home;
