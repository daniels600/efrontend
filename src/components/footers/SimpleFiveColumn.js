import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
//import { css } from "styled-components/macro"; //eslint-disable-line

// import LogoImage from "../../images/logo.svg";
import LogoImage from "../../images/erith_logo.png"
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin-icon2.svg";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start -mt-20`;
const LogoImg = tw.img`w-32`;
// const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;

const CompanyDescription = tw.p`mt-0 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

const SocialIGLink = styled.a`
  ${tw`cursor-pointer inline-block p-0 rounded-full text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-8 h-8`}
  }
`;

const Content = tw.div`max-w-screen-xl mx-auto pb-8`

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`
const CopyrightNotice = tw.div``
const CompanyInfo = tw.div``

const Divider = tw.div`my-2 border-b-2 border-gray-300`



export default () => {
  return (
    <Container>
      <Content>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            {/* <LogoText>Treact Inc.</LogoText> */}
          </LogoContainer>
          <CompanyDescription>
          In 2016, Asomaniwaa Owusu-Ansah, a prominent oncology pharmacist, founded Erith Health with the mission of "Caring for Caregivers."
          </CompanyDescription>
          <SocialLinksContainer>
            <SocialLink href="https://www.facebook.com/erithpharma" target="_blank">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com/ErithHS" target="_blank">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://www.youtube.com/channel/UCo3Ic6o_QclAN12EzEwq5nA" target="_blank">
              <YoutubeIcon />
            </SocialLink>
            <SocialIGLink href="https://www.linkedin.com/company/erith-pharma-and-health-services-ltd" target="_blank">
              <LinkedInIcon />
            </SocialIGLink>
            <SocialIGLink href="https://www.instagram.com/erithhs/" target="_blank">
              <InstagramIcon />
            </SocialIGLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Quick Links</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Blogs</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">About Us</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Contact Us</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/login">Log In</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="/register">Register</Link>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Product</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Training</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">E-commerce</Link>
            </LinkListItem>
            {/* <LinkListItem>
              <Link href="#">Business</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Team</Link>
            </LinkListItem> */}
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Legal</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Privacy Policy</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Terms of Service</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Cookies Policy</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Disclaimer</Link>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
      <Divider/>
        <CopyrightAndCompanyInfoRow>
          <CopyrightNotice>&copy; Copyright 2023, Erith Health Services.</CopyrightNotice>
          <CompanyInfo>A Healthcare Enterprise.</CompanyInfo>
        </CopyrightAndCompanyInfoRow>
        </Content>
    </Container>
  );
};
