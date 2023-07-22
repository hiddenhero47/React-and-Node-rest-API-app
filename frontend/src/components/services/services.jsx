import React from "react";
import { Services, Gride } from "./services.style";

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
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </Gride>
      </div>
    </Services>
  );
}

export default OurServices;
