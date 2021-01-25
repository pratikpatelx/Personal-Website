import React from "react";
import Indigo from "../../images/indigo.jpg";
import Cox from "../../images/cox.jpg";
import FarmLink from "../../images/FarmLink.jpg";

import {
  ExperienceContainer,
  ExperienceH1,
  ExperiencesWrapper,
  ExperiencesCard,
  ExperiencesIcon,
  ExperienceHeader,
  ExperiencesH2,
  ExperiencesP,
} from "./ExperienceElements";

const ExperiencePage = () => {
  return (
    <ExperienceContainer id="experiences">
      <ExperienceH1>My Experiences</ExperienceH1>
      <ExperiencesWrapper>
        <ExperiencesCard>
          <ExperiencesIcon src={FarmLink}></ExperiencesIcon>
          <ExperiencesH2> FarmLink Marketing Solutions</ExperiencesH2>
          <ExperienceHeader>Winter 2020</ExperienceHeader>
          <ExperiencesP>
            FarmLink Marketing Solutions is Canadian company specializing in
            farming related technology to help producers market their grain and
            make more money.
          </ExperiencesP>
        </ExperiencesCard>
        <ExperiencesCard>
          <ExperiencesIcon src={Cox}></ExperiencesIcon>
          <ExperiencesH2>Cox Communications</ExperiencesH2>
          <ExperienceHeader>Summer 2020</ExperienceHeader>
          <ExperiencesP>
            Cox Communications is an American company that provides digital
            cable television, telecommunications and Home Automation services in
            the United States
          </ExperiencesP>
        </ExperiencesCard>
        <ExperiencesCard>
          <ExperiencesIcon src={Indigo}></ExperiencesIcon>
          <ExperiencesH2>Indigo Park Canada Inc</ExperiencesH2>
          <ExperienceHeader>Summer 2017 - Present</ExperienceHeader>
          <ExperiencesP>
            Indigo Park provides car park management solutions. The Company
            offers building and on street parking services, rental vehicles,
            electronic toll payment, and customized services.{" "}
          </ExperiencesP>
        </ExperiencesCard>
      </ExperiencesWrapper>
    </ExperienceContainer>
  );
};

export default ExperiencePage;
