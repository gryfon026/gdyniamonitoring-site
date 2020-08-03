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
      camera: "cam2",
      password: "podróż",
      videoId: "1nKLpC8Ebbc",
      videoId2: "HDkF2ztFyuI",
      title: "Hotel Jakubowy",
    },
    {
      camera: "cam3",
      password: "wiadomości",
      videoId: "Fm658KpJoaY",
      title: "Wiadomości - plac Kaszubski",
    },
    {
      camera: "cam3",
      password: "smacznego",
      videoId: "WFvtUnyxNbw",
      title: "Cafe Vogit",
    },
    {
      camera: "cam3",
      password: "zakupy",
      videoId: "jIqoPAguhqk",
      title: "C.H. Kwiatkowskiego",
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
        <Form onSubmit={handleSubmit}>
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
        </Form>
        {isWrongPassword && (
          <TextError>Błędne hasło. Spróbuj jeszcze raz.</TextError>
        )}
        <Camera>
          <Iframe videoId={video.videoId} title={video.title} />
        </Camera>
        {video && video.videoId2 && (
          <Camera>
            <Iframe videoId={video.videoId2} title={video.title} />
          </Camera>
        )}
      </CamerasWrapper>
    </AppWrapper>
  );
}

const Iframe = ({ videoId = "1nKLpC8Ebbc", title = "Empty" } = {}) => {
  return (
    videoId && (
      <IframeStyled
        width="560"
        height="315"
        title={title}
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></IframeStyled>
    )
  );
};

const Form = styled.form`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  max-width: 600px;

  label {
    display: inner-block;
    line-height: 38px;
  }

  input[type="text"] {
    font-size: 14px;
    display: block;
    border: none;
    border-bottom: 1px solid #222;
    margin: 0 14px;
  }

  input[type="submit"] {
    display: block;
    text-transform: uppercase;
    border-radius: 45px;
    padding: 10px;
    border: none;
    background: #ffbf00d9;
  }
  input:focus {
    outline: none;
  }
`;
const TextError = styled.span`
  text-align: center;
  color: red;
  font-size: 16px;
  margin-top: 10px;
`;
const IframeStyled = styled.iframe`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
const Camera = styled.div`
  position: relative;
  margin-top: 10px;
  padding-bottom: calc(315 / 560 * 100%);
  width: 100%;
`;

const CamerasWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 900px;
  margin: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const HeaderWrapper = styled.div`
  text-align: center;
  position: relative;
  flex-grow: 4;
`;
const AppText = styled.p`
  font-size: 16px;
`;
const AppLogo = styled.img`
  position: relative;
  display: block;
  max-width: 200px;
  background: #fff;
  object-fit: scale-down;
`;
const AppTitle = styled.h2`
  font-size: 26px;
`;
const AppHeader = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  justify-align: center;
  flex-direction: column;
`;
export default App;
