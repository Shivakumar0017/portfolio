import React from 'react';
import { Element } from 'react-scroll';
import Certificate from '../Certificate/Certificate';
import"./Certificatecontainer.css";


const Certificatecontainer = () => {
    const certificates=[
        {
            img:"https://www.bing.com/th?id=OIP.-ZUY2DbID8cqzUs7UGxy9gHaE6&w=307&h=203&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
            title:"C#",
            desc:"Certificate",
            link:"https://drive.google.com/file/d/1pWYj85isF-jztYel87WTGUtTq8q6K8Hb/view?usp=share_link"
        },
        {
            img:"https://th.bing.com/th/id/OIP.zUFyWN0ECxXuf4BEYob4zQHaFH?w=249&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            title:"C++",
            desc:"Certificate",
            link:"https://drive.google.com/file/d/18XT4PBI3d1a7Ua3OYYp0AFDtVtRx4BWJ/view?usp=share_link",
            
        },
        {
            img:"https://th.bing.com/th/id/OIP.2BH098627L1veWjIn_oNEAHaEo?w=286&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            title:"Python",
            desc:"Certificate",
            link:"https://drive.google.com/file/d/1CFNBUD5rIzugXO1rHucF20yLypJ9LBYm/view?usp=share_link",
            
        },
        {
            img:"https://th.bing.com/th/id/OIP.K18TsENrR4BckgjoiByHVgHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            title:"Google Cloud Fundamentals:Cloud Infrastructure",
            desc:"Certificate",
            link:"https://drive.google.com/file/d/1uM6zg9R05YSfY18dzhyutgUvlL6nfyyT/view?usp=share_link",
            
        },
        {
            img:"https://th.bing.com/th/id/OIP.i31TmwzCPM3iuYK1b6YQwAHaEo?w=293&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            title:"Digital Marketing",
            desc:"Certificate",
            link:"https://drive.google.com/file/d/1mOFYUonSao6EmDvMZ2QcRp39mZn_d3S2/view?usp=share_link",
            
        },
        {
            img:"https://th.bing.com/th/id/OIP.qkb_gv4Q9YFOlrGEdzQYhgHaE7?w=260&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            title:"AWS",
            desc:"Certificate",
            link:"https://drive.google.com/file/d/1tIiaAg5JqhNC0JczE_gaRjoJorjed61N/view?usp=share_link",
            
        },
    ];
  return (
    <Element className='certificateContainer' id="certificates">
        <h1>Certificates</h1>
        <p>Certificates That I have got</p>
        <div className='certificateContainer__certificates'>
            {
                certificates.map((certificate,index)=>{
                    return  (
                        <Certificate key={index} img={certificate.img} title={certificate.title} desc={certificate.desc} link={certificate.link}></Certificate>
                    );
                })
            }
        </div>
    </Element>
  );
};

export default Certificatecontainer