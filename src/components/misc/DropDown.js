// Dropdown.js
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BritainFlag from "../../images/britain-flag.png"

// Styled components
const DropdownContainer = styled.div`
  ${tw`relative w-20`}
`;

const Select = styled.select`
  ${tw`block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline`}
`;

const Option = styled.option`
  ${tw`flex items-center`}
`;

const Image = styled.img`
  ${tw`w-6 h-6 mr-10`}
`;

const Dropdown = () => {
  return (
    <DropdownContainer>
      <Select>
        <Option value="option1">
          <Image src={BritainFlag} alt="Image 1" />
          Option 1
        </Option>
        <Option value="option2">
          <Image src={BritainFlag} alt="Image 2" />
          Option 2
        </Option>
        <Option value="option3">
          <Image src={BritainFlag} alt="Image 3" />
          Option 3
        </Option>
      </Select>
    </DropdownContainer>
  );
};

export default Dropdown;
