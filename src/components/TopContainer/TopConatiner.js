import React from 'react';
import {Element} from "react-scroll";
import TopContent from '../TopContent/TopContent';
import "./TopConatiner.css";

const TopConatiner = () => {
  return (
    <Element name="about" className='topContainer'>
        <TopContent></TopContent>
    </Element>
  );
};

export default TopConatiner