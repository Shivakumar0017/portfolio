import React, { useState } from 'react'
import "./Certificate.css";

const Certificate = ({img,title,desc,link}) => {
    const[show,setShow]=useState(false);
  return (
    <a href={link}>
        <div className='certificate' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
   { show?(
        <div className='certificate__content'>
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

export default Certificate