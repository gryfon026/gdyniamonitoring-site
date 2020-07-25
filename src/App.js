import React from "react";
import styled from "styled-components";
import logo from "./assets/flag.png";
import { Fonts } from "./fonts/fonts";
import { GlobalStyle } from "./styles/global-style";

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Fonts />
      <AppHeader>
        <AppLogo src={logo} alt="flag" />
        <HeaderWrapper>
          <AppTitle>Miejski Monitoring w Gdyni</AppTitle>
          <AppText>Dostęp tylko dla upoważnionych.</AppText>
        </HeaderWrapper>
      </AppHeader>
      <CamerasWrapper>
        <Camera>
          <Iframe videoId="1nKLpC8Ebbc" title="Jakubowy na wyjscie" />
        </Camera>
      </CamerasWrapper>
    </AppWrapper>
  );
}

const Iframe = ({ videoId = "", title = "Empty" } = {}) => {
  return (
    <iframe
      width="560"
      height="315"
      title="test"
      src={`https://www.youtube-nocookie.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

const Camera = styled.div`
  position: relative;
  display: block;
  padding: 10px;
`;

const CamerasWrapper = styled.div`
  position: relative;
  display: flex;
`;
const HeaderWrapper = styled.div`
  text-align: center;
`;
const AppText = styled.p`
  font-size: 16px;
`;
const AppLogo = styled.img`
  position: relative;
  width: 200px;
  // height: 200px;
  background: #fff;
`;
const AppTitle = styled.h2`
  font-size: 26px;
`;
const AppHeader = styled.div`
  position: relative;
  display: flex;
`;

const AppWrapper = styled.div``;
export default App;
