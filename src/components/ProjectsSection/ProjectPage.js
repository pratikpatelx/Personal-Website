import React from "react";
import {
  ProjectContainer,
  ProjectH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectHeader,
  ProjectsH2,
  ProjectsP,
  BtnWrapper,
  ProjectBtn,
} from "./ProjectElement";

import bg1 from "../../images/bg1.jpg";
import bg2 from "../../images/bg2.jpg";
import bg3 from "../../images/bg3.jpg";
import bg4 from "../../images/bg4.jpg";

const ProjectPage = () => {
  return (
    <ProjectContainer id="projects">
      <ProjectH1>My Projects</ProjectH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={bg1}></ProjectsIcon>
          <ProjectsH2>Multithreaded Chat Application</ProjectsH2>
          <ProjectsP>
            A Multithreaded Chat Application with Client and Server TCP
            protocol, written from scratch in Python using Socket Programming.
          </ProjectsP>
          <BtnWrapper>
            <ProjectBtn
              onClick={() =>
                window.open(
                  "https://github.com/pratikpatelx/MultiThreadedChat",
                  "_blank"
                )
              }
            >
              Visit Repo
            </ProjectBtn>
          </BtnWrapper>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={bg2}></ProjectsIcon>
          <ProjectsH2>Linux Kernel Keyboard Driver</ProjectsH2>
          <ProjectsP>
            A Linux Kernel Keyboard driver written in low level C.
          </ProjectsP>
          <BtnWrapper>
            <ProjectBtn
              onClick={() =>
                window.open(
                  "https://github.com/pratikpatelx/Linux-Kernel-keyboard-driver",
                  "_blank"
                )
              }
            >
              Visit Repo
            </ProjectBtn>
          </BtnWrapper>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={bg4}></ProjectsIcon>
          <ProjectsH2>Flashy</ProjectsH2>
          <ProjectsP>
            Flashy is an android application that allows anyone reviewing study
            material to create, view, and organize digital flashcards, from
            anywhere.
          </ProjectsP>
          <BtnWrapper>
            <ProjectBtn
              onClick={() =>
                window.open(
                  "https://code.cs.umanitoba.ca/comp3350-winter2019/flashme---group-14",
                  "_blank"
                )
              }
            >
              Visit Repo
            </ProjectBtn>
          </BtnWrapper>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={bg3}></ProjectsIcon>
          <ProjectsH2>AnswerBot</ProjectsH2>
          <ProjectsP>
            AnswerBot is an automated tool that generates answer summary to
            Developers' Technical Questions.
          </ProjectsP>
          <BtnWrapper>
            <ProjectBtn
              onClick={() =>
                window.open(
                  "https://github.com/pratikpatelx/AnswerBot",
                  "_blank"
                )
              }
            >
              Visit Repo
            </ProjectBtn>
          </BtnWrapper>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectContainer>
  );
};

export default ProjectPage;
