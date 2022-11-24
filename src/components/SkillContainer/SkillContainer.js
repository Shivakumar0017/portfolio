import React from 'react'
import {Element} from "react-scroll";
import skills from "../../assets/skills.jpg";

import LinearProgress from '@mui/material/LinearProgress';
import "./SkillContainer.css"

const SkillContainer = () => {
  return (
    
<Element className='skillContainer' id="skills">
    <div className='skillContainer__image'>
    <img src={skills} alt="Skills"></img>
     </div>
     <div className='skillContainer__text'>
        <h2>SKILLS</h2>
        <div className='skillContainer__skills'>
            <h5>C</h5>
            <div className='skillContainer__slider skillContainer__slider1'>
                <LinearProgress variant='determinate' value={90}></LinearProgress>
            </div>
        </div>
        <div className='skillContainer__skills'>
            <h5>C++</h5>
            <div className='skillContainer__slider skillContainer__slider2'>
                <LinearProgress variant='determinate' value={75}></LinearProgress>
            </div>
        </div>
        <div className='skillContainer__skills'>
            <h5>Python</h5>
            <div className='skillContainer__slider skillContainer__slider3'>
                <LinearProgress variant='determinate' value={95}></LinearProgress>
            </div>
        </div>
        <div className='skillContainer__skills'>
            <h5>React</h5>
            <div className='skillContainer__slider skillContainer__slider4'>
                <LinearProgress variant='determinate' value={50}></LinearProgress>
            </div>
        </div>
        <div className='skillContainer__skills'>
            <h5>Html</h5>
            <div className='skillContainer__slider skillContainer__slider5'>
                <LinearProgress variant='determinate' value={85}></LinearProgress>
            </div>
        </div>
        <div className='skillContainer__skills'>
            <h5>Css</h5>
            <div className='skillContainer__slider skillContainer__slider6'>
                <LinearProgress variant='determinate' value={90}></LinearProgress>
            </div>
        </div>
        <div className='skillContainer__skills'>
            <h5>Js</h5>
            <div className='skillContainer__slider skillContainer__slider7'>
                <LinearProgress variant='determinate' value={90}></LinearProgress>
            </div>
        </div>
        <div className='skillContainer__skills'>
            <h5>Flutter</h5>
            <div className='skillContainer__slider skillContainer__slider8'>
                <LinearProgress variant='determinate' value={45}></LinearProgress>
            </div>
        </div>
     </div>
</Element>
    
  )
}

export default SkillContainer