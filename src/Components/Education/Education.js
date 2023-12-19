import React from "react";
import { Bounce, LightSpeed } from "react-reveal";
import { EducationContainerWrapper } from "./EducationStyled";

const Education = () => {
  return (
    <EducationContainerWrapper>
      <div id="education">
        <Bounce>
          <h1 className="education-heading"> MY EDUCATION </h1>
        </Bounce>

        <div id="education-card">
          <LightSpeed>
            <div className="educ">
              <h3> Bachelor of Technlogy </h3>
              <h6> PDM College Of Engineering </h6>
              <h6> 2017-2021 </h6>
            </div>
          </LightSpeed>

          <LightSpeed>
            <div className="educ">
              <h3> Senior Secondary </h3>
              <h6> Smt. Mishri Devi Gyan Niketan </h6>
              <h6> 2016-2017 </h6>
            </div>
          </LightSpeed>

          <LightSpeed>
            <div className="educ">
              <h3> Secondary </h3>
              <h6> Smt. Mishri Devi Gyan Niketan </h6>
              <h6> 2014-2015 </h6>
            </div>
          </LightSpeed>
        </div>
      </div>
    </EducationContainerWrapper>
  );
};

export default Education;
