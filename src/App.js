import React from 'react';
import { Header, Footer, MainStyleContainer } from "./appLayout";
import { MainView } from "./mainView";

function App() {
  return (
    <MainStyleContainer>
      <Header>Shopping</Header>
      <MainView />
      <Footer copyrightExpiary={2020} name="Noa Corporation" />
    </MainStyleContainer>
  );
}

export default App;
