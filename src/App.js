import React, { useState } from "react";
import styled from "styled-components";
import logo from "./assets/flag.png";
import { Fonts } from "./fonts/fonts";
import { GlobalStyle } from "./styles/global-style";

function App() {
  const [password, setPassword] = useState("");
  const [isWrongPassword, setIsWrongPassword] = useState(false);
  const [video, setVideo] = useState({});

  const database = [
    {
      camera: "cam1",
      password: "wyjscie",
      videoId: "1nKLpC8Ebbc",
      title: "Jakubowy na wyjscie",
    },
    {
      camera: "cam1&2",
      password: "wejście",
      videoId: "HDkF2ztFyuI",
      title: "Jakubowy wejscie",
    },
    {
      camera: "cam3",
      password: "wiadomości",
      videoId: "Fm658KpJoaY",
      title: "Wiadomości",
    },
  ];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    checkPassword(password);
    setPassword("");
  };
  const checkPassword = (value) => {
    const found = database.find(
      (element) => element.password === value.toLowerCase()
    );
    console.log("found ", found);
    if (found) {
      setVideo(found);
      setIsWrongPassword(false);
    } else {
      setIsWrongPassword(true);
    }
  };
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
        <form onSubmit={handleSubmit}>
          <label>
            Podaj hasło:
            <input
              type="text"
              value={password}
              onChange={(evt) => {
                return setPassword(evt.target.value);
              }}
            />
          </label>
          <input type="submit" value="Wyślij" />
        </form>
        {isWrongPassword && (
          <TextError>Błędne hasło. Spróbuj jeszcze raz.</TextError>
        )}
        <Camera>
          <Iframe videoId={video.videoId} title={video.title} />
        </Camera>
      </CamerasWrapper>
    </AppWrapper>
  );
}

const Iframe = ({ videoId = "", title = "Empty" } = {}) => {
  console.log("videoId: ", videoId);
  return (
    videoId && (
      <iframe
        width="560"
        height="315"
        title="test"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    )
  );
};

const TextError = styled.span`
  color: red;
  font-size: 16px;
`;
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
