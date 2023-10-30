import React, { useState } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

// Styled Components
const LanguageSwitcherContainer = styled.div`
  position:fixed; right:4rem; bottom:4rem; z-50 // Adjust positioning as needed
`;

const LanguageSwitcherButton = styled.button`
  ${tw`flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none`}
`;

const LanguageSwitcherDropdown = styled.div`
  ${tw`absolute mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg`}
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const LanguageSwitcherItem = styled.div`
  ${tw`px-4 py-2 cursor-pointer hover:bg-gray-100`}
`;

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Implement your logic for changing the language here
  };

  return (
    <LanguageSwitcherContainer>
      <LanguageSwitcherButton onClick={toggleDropdown}>
        {selectedLanguage}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M7.293 5.293a1 1 0 011.414 0l4 4a1 1 0 11-1.414 1.414L10 7.414V16a1 1 0 11-2 0V7.414L6.293 10.707a1 1 0 01-1.414-1.414l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </LanguageSwitcherButton>
      <LanguageSwitcherDropdown isOpen={isOpen}>
        <LanguageSwitcherItem onClick={() => handleLanguageChange("English")}>
          English
        </LanguageSwitcherItem>
        {/* Add more language options as needed */}
      </LanguageSwitcherDropdown>
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;
