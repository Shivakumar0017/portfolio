import React from 'react';
import { Element } from 'react-scroll';
import Portfolio from '../Portfolio/Portfolio';
import"./Portfoliocontainer.css";


const Portfoliocontainer = () => {
    const portfolios=[
        {
            img:"https://tse4.mm.bing.net/th?id=OIP.YrBQaR19X2Zq--37kao0LwHaFj&pid=Api&P=0",
            title:"Advance program practices",
            desc:"Portfolio",
            link:"https://drive.google.com/file/d/1Yass5XA9NEYzmmU1ntqeelkXspvIYGJx/view?usp=share_link"
        },
        {
            img:"https://tse3.mm.bing.net/th?id=OIP.btMEUkDZwXNmroBCIrTIWwHaDq&pid=Api&P=0",
            title:"Formal Language and Automata",
            desc:"Portfolio",
            link:"https://drive.google.com/file/d/1brAWeTYHD7TyHDy2DCn-NKGQvPx57-va/view?usp=share_link",
            
        },
        {
            img:"https://th.bing.com/th/id/OIP.hGTFB5BqlpAyq_MxBscB-wHaFj?w=220&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            title:"Computer Networks",
            desc:"Portfolio",
            link:"https://drive.google.com/file/d/1brAWeTYHD7TyHDy2DCn-NKGQvPx57-va/view?usp=share_link",
            
        },
    ];
  return (
    <Element className='portfolioContainer' id="portfolios">
        <h1>Portfolio</h1>
        <p>Here are some portfolios that I have created</p>
        <div className='portfolioContainer__portfolios'>
            {
                portfolios.map((portfolio,index)=>{
                    return  (
                        <Portfolio key={index} img={portfolio.img} title={portfolio.title} desc={portfolio.desc} link={portfolio.link}></Portfolio>
                    );
                })
            }
        </div>
    </Element>
  );
};

export default Portfoliocontainer