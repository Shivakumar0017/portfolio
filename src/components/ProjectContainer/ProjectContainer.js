import React from 'react';
import { Element } from 'react-scroll';
import Project from '../Project/Project';
import"./ProjectContainer.css";

const ProjectContainer = () => {
    const projects=[
        {
            img:"https://th.bing.com/th/id/OIP.ePc3B5n-njuQOawKJuPxPQHaF7?w=230&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            title:"Fine Mechanic",
            desc:"An app to book Apointment for vehicle service",
            link:"https://github.com/Shivakumar0017/fine_mechanic",
        },
        {
            img:"https://th.bing.com/th/id/OIP.A2xpNKe7nC1UIczxT11ULgHaGj?w=197&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            title:"Expense Planner",
            desc:"An app to keep Track of your expenses",
            link:"https://github.com/Shivakumar0017/expense_planner"
            
        },
    ];
  return (
    <Element className='projectContainer' id="projects">
        <h1>Projects</h1>
        <p>Here are some projects that I have done</p>
        <div className='projectContainer__projects'>
            {
                projects.map((project,index)=>{
                    return  (
                        <Project key={index} img={project.img} title={project.title} desc={project.desc} link={project.link}></Project>
                    );
                })
            }
        </div>
    </Element>
  );
};

export default ProjectContainer