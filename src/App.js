import React from "react";
// import "./App.css";
import styled from "styled-components";
import logo from "./assets/flag.png";
import { Fonts } from "./fonts/fonts";

function App() {
  return (
    <AppWrapper>
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
          <iframe
            width="560"
            title="film1"
            height="315"
            src="https://www.youtube-nocookie.com/embed/Y1vfnYpOFD8?rel=0&enablejsapi=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Camera>
      </CamerasWrapper>
    </AppWrapper>
  );
}

const Camera = styled.div``;

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
const AppTitle = styled.h2``;
const AppHeader = styled.div`
  position: relative;
  display: flex;
`;

const AppWrapper = styled.div``;
export default App;
