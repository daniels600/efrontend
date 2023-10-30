// FixedBanner.js
import React, { useState } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";
import BritainFlag from "../../images/britain-flag.png";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin-icon2.svg";

// Styled components
const FixedBannerContainer = styled.div`
  ${tw`flex flex-wrap items-center justify-center top-0 left-0 right-0 w-full bg-blue-500 text-black p-1 justify-between text-center z-50 bg-gray-200`}
`;

const FixedBannerSpacer = styled.div`
  ${tw`h-5`}/* Adjust the height to match the banner's height */
`;

const SocialLinksContainer = tw.div`mt-2 ml-8`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-1 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-3 h-3`}
  }
`;

const SocialIGLink = styled.a`
  ${tw`cursor-pointer inline-block p-0 rounded-full text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

// const ImageIcon = tw.img`
//  w-6 h-6
// `;
// const Text = tw.span`
//  text-gray-700
// `;

const Container = tw.div`flex items-center space-x-2 justify-center`;
const ImageIcon = tw.img`h-6 w-6 ml-6`;
const Text = tw.span`text-gray-700`;

const FixedBanner = () => {
  return (
    <React.Fragment>
      <FixedBannerContainer>
        {/* <div tw="flex items-center">
          <ImageIcon src={BritainFlag} alt="Image Icon" />
          <Text>Text beside the image icon</Text>
        </div> */}
        <Container>
          <ImageIcon src={BritainFlag} alt="Image Icon" />
          <Text tw="mr-10">Françias</Text>
          <ImageIcon src={BritainFlag} alt="Image Icon" />
          <Text>English</Text>
        </Container>
        
        <SocialLinksContainer>
          <SocialLink
            href="https://www.facebook.com/erithpharma"
            target="_blank"
          >
            <FacebookIcon />
          </SocialLink>
          <SocialLink href="https://twitter.com/ErithHS" target="_blank">
            <TwitterIcon />
          </SocialLink>
          <SocialLink
            href="https://www.youtube.com/channel/UCo3Ic6o_QclAN12EzEwq5nA"
            target="_blank"
          >
            <YoutubeIcon />
          </SocialLink>
          <SocialIGLink
            href="https://www.linkedin.com/company/erith-pharma-and-health-services-ltd"
            target="_blank"
          >
            <LinkedInIcon />
          </SocialIGLink>
          <SocialIGLink
            href="https://www.instagram.com/erithhs/"
            target="_blank"
          >
            <InstagramIcon />
          </SocialIGLink>
        </SocialLinksContainer>
      </FixedBannerContainer>
      <FixedBannerSpacer />
    </React.Fragment>
  );
};

export default FixedBanner;
