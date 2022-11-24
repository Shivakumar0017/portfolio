import React from 'react'
import Header from './components/Header/Header'
import TopConatiner from './components/TopContainer/TopConatiner';
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from "./components/ProjectContainer/ProjectContainer"
import "./App.css"
import EducationContainer from './components/EducationContainer/EducationContainer';
import Contact from './components/Contact/Contact';
import Portfoliocontainer from './components/Portfoliocontainer/Portfoliocontainer';
import Certificatecontainer from './components/Certificatecontainer/Certificatecontainer';


const App = () => {
  return (
    <div>
      <Header></Header>
      <TopConatiner></TopConatiner>
      <EducationContainer></EducationContainer>
      <SkillContainer></SkillContainer>
      <ProjectContainer></ProjectContainer>
      <Portfoliocontainer></Portfoliocontainer>
      <Certificatecontainer></Certificatecontainer>
      <Contact></Contact>
    </div>
  )
}

export default App
