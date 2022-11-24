import { IconButton } from '@mui/material';
import React from 'react'
import {Element} from "react-scroll";
import "./Contact.css";
import {Facebook,Instagram,LinkedIn} from "@mui/icons-material";
const Contact = () => {
  return (
   <Element className='contact' id="contact">
        <h1>
            Contact
        </h1>
        <div className='contact__container'>
        <p>Email : <span>rshivakumar017@gmail.com</span></p>
        <p>Github Username : <span>@Shivakumar0017</span></p>
        <p>Mobile : <span>6383933950</span></p>
        <div className='contact__icons'>
    <a href="google.com">
        <IconButton>
            <LinkedIn></LinkedIn>
        </IconButton>
    </a>
    <a href="google.com">
        <IconButton>
            <Facebook></Facebook>
        </IconButton>
    </a>
    <a href="https://www.instagram.com/shiva___shivu">
        <IconButton>
            <Instagram></Instagram>
        </IconButton>
    </a>
        </div>
    </div>
   </Element>
  )
}

export default Contact