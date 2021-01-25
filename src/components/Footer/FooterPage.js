import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

import {
  GrLinkedin,
  GrGithub,
  GrMail,
  GrTwitter,
  GrReactjs,
} from "react-icons/gr";
import { AiFillHeart } from "react-icons/ai";

export const FooterPage = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper></FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo>
              Made with <AiFillHeart></AiFillHeart> in <GrReactjs />
            </SocialLogo>
            <WebsiteRights>
              Pratik Patel © {new Date().getFullYear()}.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.linkedin.com/in/pratik-patel-622183b1/"
                target="_blank"
                aria_label="LinkedIn"
              >
                <GrLinkedin></GrLinkedin>
              </SocialIconLink>
            </SocialIcons>
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/pratikpatelx"
                target="_blank"
                aria_label="Github"
              >
                <GrGithub></GrGithub>
              </SocialIconLink>
            </SocialIcons>
            <SocialIcons>
              <SocialIconLink
                href="mailto: patelpk3@myumanitoba.ca"
                target="_blank"
                aria_label="GMail"
              >
                <GrMail></GrMail>
              </SocialIconLink>
            </SocialIcons>
            <SocialIcons>
              <SocialIconLink
                href="https://twitter.com/pratikP123"
                target="_blank"
                aria_label="Twitter"
              >
                <GrTwitter></GrTwitter>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default FooterPage;
