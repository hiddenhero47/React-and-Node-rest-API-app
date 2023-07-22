import React from "react";
import { FooterStyle, MainFooter } from "./footer.style";
import { useScreenSize } from "../../../appHelpers/screenSize";
import { Logo, LogoTextDark } from "../../icons/appLogo";
import {
  InstagramCircle,
  FaceBookCircle,
  TwitterCircle,
} from "../../icons/socialMedia";

function Footer() {
  const screenSize = useScreenSize();

  return (
    <FooterStyle>
      <MainFooter>
        <div className="container">

          <div className="icon">
            <i><Logo width={35} height={29.93} /></i>
            <i><LogoTextDark width={220} height={21} /></i>
          </div>

          <div className="fieldBox">

            <div className="box">
              <div className="innerBoxWrapper">

                <div className="innerBoxOne">
                  <div className="socialIcon">
                     <FaceBookCircle width={35} height={35} />
                     <TwitterCircle width={35} height={35} />
                     <InstagramCircle width={35} height={35} />
                  </div>
                </div>

                <div className="innerBoxTwo">
                <ul className="list">
                    <li className="first">Explore</li>
                    <li>About Us</li>
                    <li> Gallery</li>
                    <li> Offers</li>
                    <li> Pricing</li>
                    <li>FAQ</li>
                  </ul>
                  <ul className="list">
                    <li className="first">About Us</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                    <li>Service Request</li>
                    <li>Why Work With Us?</li>
                  </ul>
                </div>

                <div className="innerBoxThree">
                <ul className="list">
                    <li className="first">Resources</li>
                    <li>Terms</li>
                    <li>Licences</li>
                    <li>Help Centre</li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="foot">
              <span className="footText">
              Copyright © SaTna Consults | Designed by DesigNomad
              </span>
            </div>

          </div>

        </div>
      </MainFooter>
    </FooterStyle>
  );
}

export default Footer;
