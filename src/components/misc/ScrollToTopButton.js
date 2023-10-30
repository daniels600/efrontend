import { useEffect, useState } from 'react';

import styled from "@emotion/styled";

const StyledButton = styled.div`
  position: fixed;
  bottom: 3rem; /* Adjust the distance from the bottom as needed */
  right: 2rem; /* Adjust the distance from the right as needed */
  background-color: #1D187C;
  color: white;
  padding: 1rem;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

// const StyledButton = tw.button`
//   fixed
//   bottom-4
//   right-4
//   bg-primary-900
//   text-white
//   p-3
//   rounded-full
//   shadow-lg
//   hover:scale-105
//   transition-transform
//   transform
//   ease-in-out
//   duration-300
// `;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isVisible ? (
    <StyledButton onClick={scrollToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </StyledButton>
  ) : null;
};

export default ScrollToTopButton;
