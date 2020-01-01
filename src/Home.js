import React from "react";
import { PageSection } from "./appLayout";
import cart from './cart.png';
import styled from "styled-components";

export const Image = styled.img`
    height: 30vmin;
    pointer-events: none;
`;

export function Home() {
  return (
    <PageSection heading="Home Page">
      <blockquote>Welcome to Noa's Shopping website! have fun :)</blockquote>
      <Image src={cart} alt="cart" />
    </PageSection>
  );
}

export default Home;