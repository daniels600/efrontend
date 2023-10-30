import React from "react";
import HeaderOne from "../../components/headers/HeaderTop";
import MobileMenu from "../../components/parts/MobileMenu";
import CartMenu from "../../components/parts/CartMenu";
import UtilizeMobileMenu from "../../components/parts/UtilizeMobileMenu";
import HeroSlider from "../../components/parts/HeroSlider";
// import Footer from "components/footers/SimpleFiveColumn.js";
import Footer from "../../components/footers/FiveColumnLight"

// import HeroWithCategories from "../../components/hero/HeroWithCategories"
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";
// import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
// import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
//import Features from "components/features/ThreeColWithSideImage.js";
import FeaturesDescription from "components/features/FeaturesDescription.js";
// import tw from "twin.macro";
// import styled from "styled-components";

// const BodyWrapper = styled.div`
//   ${tw`mx-auto max-w-screen-xl`}
// `;

// const mainContainerStyle = {
//   width: "100% !important",
//   // border: "1px solid #ccc",
//   padding: 0,
//   margin: 0,
// };

export default function HomePage() {
  return (
    <>
      <HeaderOne />
      <MobileMenu />
      <CartMenu />
      <UtilizeMobileMenu />
      <HeroSlider />
      <FeaturesDescription />
      <Footer />
    </>
  );
}
