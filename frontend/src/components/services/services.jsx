import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Services, Gride, Box } from "./services.style";
import {
  Shape,
  Ruler,
  MeasuringTool,
  Helmet,
  Tools,
  House,
} from "../icons/servicesIcon";
import { Showcase } from "./servicesModal";
import { useLocation } from "react-router-dom";
import { WORLDS } from "./Dummy";

function truncate(str, len) {
  if (str.length > len && str.length > 0) {
    let new_str = str + "";
    new_str = str.substr(0, len);
    new_str = str.substr(0, new_str.lastIndexOf(""));
    new_str = new_str.length > 0 ? new_str : str.substr(0, len);
    return new_str + "...";
  }
  return str;
}

function OurServices() {
  const location = useLocation();

  const [isModal, setIsModal] = useState(false);
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname === "/services") {
      setIsModal(true);
    } else {
      setIsModal(false);
    }
  }, [location.pathname]);

  const handelSeeMore = (element) => {
    setText(element);
    setVisible(true);
  };
  return (
    <>
      <Services>
        <div className="service">
          <div className="title">
            <h3>Our Services</h3>
            <p>
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt.
            </p>
          </div>

          <Gride>
            <Box>
              <div className="boxBody">
                <i>
                  <Shape width={38} height={38} />
                </i>
                <h5>General Contract</h5>
                <p>{truncate(WORLDS.GeneralContract, 60)}</p>
                {isModal ? (
                  <span onClick={() => handelSeeMore(WORLDS.GeneralContract)}>
                    Read More
                  </span>
                ) : (
                  <Link to="/services">Read More</Link>
                )}
              </div>
            </Box>

            <Box>
              <div className="boxBody">
                <i>
                  <Ruler width={38} height={38} />
                </i>
                <h5>Project Planning</h5>
                <p>{truncate(WORLDS.ProjectPlanning, 60)}</p>
                {isModal ? (
                  <span onClick={() => handelSeeMore(WORLDS.ProjectPlanning)}>
                    Read More
                  </span>
                ) : (
                  <Link to="/services">Read More</Link>
                )}
              </div>
            </Box>

            <Box>
              <div className="boxBody">
                <i>
                  <MeasuringTool width={38} height={38} />
                </i>
                <h5>Refurbishment</h5>
                <p>{truncate(WORLDS.Refurbishment, 60)}</p>
                {isModal ? (
                  <span onClick={() => handelSeeMore(WORLDS.Refurbishment)}>
                    Read More
                  </span>
                ) : (
                  <Link to="/services">Read More</Link>
                )}
              </div>
            </Box>

            <Box>
              <div className="boxBody">
                <i>
                  <Helmet width={38} height={38} />
                </i>
                <h5>High Quality Build</h5>
                <p>{truncate(WORLDS.HighQualityBuild, 60)}</p>
                {isModal ? (
                  <span onClick={() => handelSeeMore(WORLDS.HighQualityBuild)}>
                    Read More
                  </span>
                ) : (
                  <Link to="/services">Read More</Link>
                )}
              </div>
            </Box>

            <Box>
              <div className="boxBody">
                <i>
                  <Tools width={38} height={38} />
                </i>
                <h5>Service & maintenance</h5>
                <p>{truncate(WORLDS.ServiceMaintenance, 60)}</p>
                {isModal ? (
                  <span
                    onClick={() => handelSeeMore(WORLDS.ServiceMaintenance)}
                  >
                    Read More
                  </span>
                ) : (
                  <Link to="/services">Read More</Link>
                )}
              </div>
            </Box>

            <Box>
              <div className="boxBody">
                <i>
                  <House width={38} height={38} />
                </i>
                <h5>House Extensions</h5>
                <p>{truncate(WORLDS.HouseExtensions, 60)}</p>
                {isModal ? (
                  <span onClick={() => handelSeeMore(WORLDS.HouseExtensions)}>
                    Read More
                  </span>
                ) : (
                  <Link to="/services">Read More</Link>
                )}
              </div>
            </Box>
          </Gride>
        </div>
      </Services>
      <Showcase
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        strings={text}
      />
    </>
  );
}

export default OurServices;
