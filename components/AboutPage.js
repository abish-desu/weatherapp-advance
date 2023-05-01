import React from "react";
import AboutEd from "./aboutcard/AboutEd";
import AboutMain from "./aboutcard/AboutMain";
import AboutSkl from "./aboutcard/AboutSkl";
const AboutPage = () => {
  return (
    <div class="about">
    <AboutEd/>
    <AboutSkl/>
    <AboutMain/>
    </div>
  );
};

export default AboutPage;
