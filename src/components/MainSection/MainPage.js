import React, { useState } from "react";
import {
  MainContainer,
  MainBg,
  VideoBg,
  MainContent,
  MainH1,
  MainP,
  MainP2,
  MainBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./MainElements";
import ITyped from "react-ityped";
import Video from "../../videos/video2.mp4";
import { Button } from "../ButtonElement";

const Emoji = (props) => (
  <div
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </div>
);

const MainPage = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const strings = [
    "I'm Pratik Patel",
    "I'm a software developer",
    "A cricket enthusiast",
  ];
  return (
    <MainContainer>
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </MainBg>
      <MainContent>
        <MainH1>
          Hello There!
          <Emoji label="waving hand" symbol="👋" />
        </MainH1>
        <MainP>
          <ITyped
            showCursor={false}
            strings={strings}
            typeSpeed={100}
            backSpeed={50}
            startDelay={500}
            backDelay={500}
            disableBackTyping={false}
          />
        </MainP>
        <MainP2>
          Currently a passionate computer science student, aiming to graduate in
          May 2021. Pursuing a Bachelor's Degree in Computer Science at the
          University of Manitoba.
        </MainP2>
        <MainBtnWrapper>
          <Button
            to="about"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Let's Explore {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
};

export default MainPage;
