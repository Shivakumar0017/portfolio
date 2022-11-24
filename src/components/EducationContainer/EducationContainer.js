import React from 'react';
import {Element} from "react-scroll";
import "./EducationContainer.css";

const EducationContainer = () => {
  return (
    <Element className='educationContainer' id="education">
      <h1>Education</h1>
      <div className='education__container'>
        <h1>Graduation</h1>
        <p>B.Tech/B.E. ( Information Technology )</p>
        <p>SRM Institute of Science & Technology, Chennai with Score 9.76/10 Graduating
          in July 2024</p>
        <p>Achievements: Top 3 in class, Received scholarship</p>
      </div>
      <div className='education__container'>
      <h1>Class XII</h1>
        <p>CISCE(ICSE/ISC) </p>
        <p>Holy Innocents School And Junior College with 86.6% in 2020</p>
        <p>Achievements: School topper</p>
      </div>
      <div className='education__container'>
      <h1>Class X</h1>
        <p>CISCE(ICSE/ISC) </p>
        <p>Brindavan Public School with 82.17% in 2018</p>
      </div>

    </Element>
  )
}

export default EducationContainer