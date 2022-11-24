import React from 'react'
import { Link } from 'react-scroll';
import "./TopContent.css"

const TopContent = () => {
    return (
        <div className='topContent'>
    <div className='topContent__container'>
        <h1>R.Shiva Kumar</h1>
        <p>I am a B.Tech aspirant in Computer Science and Engineering.</p> 
        {/* <p>with a background in JavaScript technology</p> 
        <p>stacks such as React, Flutter, and Node.js.</p> */}
        <a href="https://drive.google.com/file/d/1En62XUKQJtR580otDIX9Utrxljal2Psx/view?usp=share_link">
            <button className='topContent__downloadbutton'>Download CV</button>
        </a>
        <Link to="projects" smooth={true} duration={500}>
            <button className='topContent__workbutton'>My Work</button>
        </Link>
    </div>
        </div>
  );
};

export default TopContent