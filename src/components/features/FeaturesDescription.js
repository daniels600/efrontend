import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import medicalSuppliesImageSrc from "images/medicine-supplies.svg";
import ecommerceAdScr from "images/e-commerce_ad.svg";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-900 -z-10`,
]);

const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;
const VerticalSpacer = tw.div`mt-10 w-full`;

const FeaturesDescription = () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-900`;
  const mainContainerStyle = {
    width: "100% !important",
    //border: "1px solid #ccc",
    // padding: "20px",
  };

  const HighlightedText = tw.span`text-primary-900`;

  return (
    <>
      <div
        class="ltn__small-product-list-area pt-115 pb-90 mb-120"
        style={{ marginTop: "-5rem" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div
                class="section-title-area ltn__section-title-2 text-center"
                style={{ marginTop: "10px", marginBottom: "-20px" }}
              >
                <h1 class="section-title">Services</h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area text-center">
                <Description>
                  As a trusted medical health service, we are fully committed to
                  ensuring the reliability of our support for healthcare
                  professionals, caregivers, and individuals. Alongside
                  essential supplies, training, and resources, we prioritize
                  your well-being with unwavering dedication.
                </Description>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__about-us-area" style={{ marginTop: "-20rem" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="main-container" style={mainContainerStyle}>
                <MainFeature2
                  subheading={<Subheading>Training</Subheading>}
                  heading={
                    <>
                      Advance your medical expertise with top{" "}
                      <HighlightedText>online educators.</HighlightedText>
                    </>
                  }
                  imageSrc={prototypeIllustrationImageSrc}
                  showDecoratorBlob={false}
                  features={[
                    {
                      Icon: MoneyIcon,
                      title: "Affordable",
                      description:
                        "We assure you a competitive rate, in line with industry standards.",
                      iconContainerCss: tw`bg-green-500 text-green-800`,
                    },
                    {
                      Icon: BriefcaseIcon,
                      title: "Professionalism",
                      description:
                        "We guarantee that our courses are crafted and developed by experienced medical practitioners.",
                      iconContainerCss: tw`bg-red-300 text-red-800`,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__about-us-area" style={{ marginTop: "-9rem" }}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="main-container" style={mainContainerStyle}>
                <MainFeature
                  subheading={<Subheading>E-commerce</Subheading>}
                  imageSrc={ecommerceAdScr}
                  imageBorder={true}
                  imageDecoratorBlob={true}
                  imageCss={{ height: 20, width: 10 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default FeaturesDescription;
