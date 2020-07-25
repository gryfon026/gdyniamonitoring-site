import { createGlobalStyle } from "styled-components";
import * as normalize from "./normalize.css";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
 
    html, body {
        height: 100%;
        min-height: 500px;
    }
  
    img {
        max-width: 100%;
    }
`;
