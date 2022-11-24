import React, { useState } from 'react'
import "./Portfolio.css";

const Portfolio = ({img,title,desc,link}) => {
    const[show,setShow]=useState(false);
  return (
    <a href={link}>
        <div className='portfolio' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
   { show?(
        <div className='portfolio__content'>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
    ):
    (
        <img src={img} alt=""/>
    )
    }
        </div>

    </a>
  )
}

export default Portfolio