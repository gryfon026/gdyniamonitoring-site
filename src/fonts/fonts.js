import "react";
import { createGlobalStyle } from "styled-components";
import hvdcomicserif from "./HVDComicSerifPro.otf";

export const Fonts = createGlobalStyle`
@font-face {
    font-family: "ComicSerifPro";
    src: url(${hvdcomicserif}) format("opentype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "ComicSerifPro";
    src: url(${hvdcomicserif}) format("opentype");
    font-weight: 600;
    font-style: bold;
  }
  
  body {
    font-family: "ComicSerifPro", sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
