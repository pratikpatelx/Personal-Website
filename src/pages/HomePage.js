import React, { useState } from "react";
import Sidebar from "../components/Sidebar/SideBarPage";
import Navbar from "../components/Navbar/NavbarPage";
import MainPage from "../components/MainSection/MainPage";
import InfoPage from "../components/InfoSection/InfoPage";
import { HomeObjOne } from "../components/InfoSection/Data";
import ExperiencePage from "../components/ExperienceSection/ExperiencePage";
import ProjectPage from "../components/ProjectsSection/ProjectPage";
import FooterPage from "../components/Footer/FooterPage";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar toggle={toggle}></Navbar>
      <MainPage></MainPage>
      <InfoPage {...HomeObjOne}></InfoPage>
      <ExperiencePage></ExperiencePage>
      <ProjectPage></ProjectPage>
      <FooterPage></FooterPage>
    </>
  );
};

export default Home;
