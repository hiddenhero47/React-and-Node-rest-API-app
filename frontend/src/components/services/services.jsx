import React from "react";
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

function OurServices() {
  return (
    <Services>
      <div className="service">
        <div className="title">
          <h3>Our Services</h3>
          <p>
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium metus. Proin pretium id urna sit amet
            tincidunt.
          </p>
        </div>

        <Gride>
          <Box>
            <div className="boxBody">
              <i>
                <Shape width={38} height={38} />
              </i>
              <h5>General Contract</h5>
              <p>
                Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                Turna sit amet tincidunt.
              </p>
              <Link to="/contact-us">Read More</Link>
            </div>
          </Box>

          <Box>
            <div className="boxBody">
              <i>
                <Ruler width={38} height={38} />
              </i>
              <h5>Project Planning</h5>
              <p>
                Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                Turna sit amet tincidunt.
              </p>
              <Link to="/contact-us">Read More</Link>
            </div>
          </Box>

          <Box>
            <div className="boxBody">
              <i>
                <MeasuringTool width={38} height={38} />
              </i>
              <h5>Refurbishment</h5>
              <p>
                Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                Turna sit amet tincidunt.
              </p>
              <Link to="/contact-us">Read More</Link>
            </div>
          </Box>

          <Box>
            <div className="boxBody">
              <i>
                <Helmet width={38} height={38} />
              </i>
              <h5>High Quality Build</h5>
              <p>
                Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                Turna sit amet tincidunt.
              </p>
              <Link to="/contact-us">Read More</Link>
            </div>
          </Box>

          <Box>
            <div className="boxBody">
              <i>
                <Tools width={38} height={38} />
              </i>
              <h5>Service & maintenance</h5>
              <p>
                Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                Turna sit amet tincidunt.
              </p>
              <Link to="/contact-us">Read More</Link>
            </div>
          </Box>

          <Box>
            <div className="boxBody">
              <i>
                <House width={38} height={38} />
              </i>
              <h5>House Extensions</h5>
              <p>
                Sagittis Nulla facilisi. In sed pretium metus. Proin pretium
                Turna sit amet tincidunt.
              </p>
              <Link to="/contact-us">Read More</Link>
            </div>
          </Box>
        </Gride>
      </div>
    </Services>
  );
}

export default OurServices;
