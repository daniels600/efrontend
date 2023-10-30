import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Header from "../headers/light.js";

const Container = tw.div`container mx-auto px-4 py-16`;
const Grid = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-gap: 16px;
`;

const GridItem = styled.div`
 background-color: #f7fafc;
 padding: 24px;
 border-radius: 8px;
 transition: transform 0.3s ease-in-out;

 &:hover {
    transform: translateY(-8px);
 }
`;

const MiddleGridItem = tw(GridItem)`text-center`;

const HeroSection = () => {
 return (
  <>
  <Header />
    <Container>
      <Grid>
        <GridItem>
          <h2>Grid Item 1</h2>
        </GridItem>
        <MiddleGridItem>
          <h2>Grid Item 2</h2>
        </MiddleGridItem>
        <GridItem>
          <h2>Grid Item 3</h2>
        </GridItem>
      </Grid>
    </Container>
    </>
 );
};

export default HeroSection;