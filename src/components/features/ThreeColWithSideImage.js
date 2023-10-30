import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

import CartIcon from "images/cart-icon.png";
import CourseIcon from "images/course-icon.png";
import HeartIcon from "images/heart-icon.png";

const Container = tw.div`relative`;

// const ThreeColumnContainer = styled.div`
//   ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-10 md:py-10`}
// `;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col md:flex-row items-center md:items-stretch flex-wrap md:justify-center max-w-screen-lg mx-auto py-10 md:py-10`}
`;
// const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

// const Card = styled.div`
//   ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 md:mx-2 my-4 px-2 md:px-4 py-8`}
//   // ... (other styles)
// `;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Amazing Features", description = "We are a dedicated medical health service offering comprehensive support to healthcare professionals, caregivers, and individuals, including essential supplies, training, and resources to prioritize your well-being." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: CartIcon,
      title: "E-commerce",
      description: "An e-commerce platform selling diverse medical items online, serving both consumers and healthcare professionals."
    },
    { imageSrc: CourseIcon, title: "Training", description: "Online medical training program by a healthcare provider for skill enhancement and knowledge in healthcare."},
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {/* {subheading && <Subheading>{subheading}</Subheading>} */}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
