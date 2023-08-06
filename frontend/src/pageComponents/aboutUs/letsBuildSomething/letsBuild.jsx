import React from "react";
import { Quote } from "./letBuild.style";
import office from "../../../media/pictures/office-building.jpg";
import { Link } from "react-router-dom";

function Appointment() {
  return (
    <Quote $images={office}>
      <span>Get a Quote</span>
      <h3>Let's Build Something Creative</h3>
      <h3>Together</h3>
      <Link className="btn" to="/contact-us">Book Appointment with Us?</Link>
    </Quote>
  );
}

export default Appointment;
