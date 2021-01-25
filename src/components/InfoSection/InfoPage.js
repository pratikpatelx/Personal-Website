import React from "react";
import { GoMarkGithub } from "react-icons/go";

import { GrLinkedin, GrMail, GrTwitter } from "react-icons/gr";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  ImgWrap,
  Img,
  Icons,
} from "./InfoElements";

const InfoPage = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrap>
                  <Icons>
                    <a
                      href="https://www.linkedin.com/in/pratik-patel-622183b1/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GrLinkedin size={24}></GrLinkedin>
                    </a>
                  </Icons>
                  <Icons>
                    <a
                      href="https://github.com/pratikpatelx"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GoMarkGithub size={24}></GoMarkGithub>
                    </a>
                  </Icons>
                  <Icons>
                    <a href="mailto: patelpk3@myumanitoba.ca">
                      <GrMail size={24}></GrMail>
                    </a>
                  </Icons>
                  <Icons>
                    <a
                      href="https://twitter.com/pratikP123"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GrTwitter size={24}></GrTwitter>
                    </a>
                  </Icons>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}></Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoPage;
