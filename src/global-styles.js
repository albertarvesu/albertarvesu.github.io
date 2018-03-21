import { injectGlobal } from "styled-components";
import Monaco from "./fonts/Monaco.ttf";
import Consolas from "./fonts/Consolas.ttf";

import Github from "./images/github.svg";
import Twitter from "./images/twitter.svg";
import LinkedIn from "./images/linkedin.svg";
import Mail from "./images/mail.svg";

injectGlobal`
  @font-face {
    font-family: 'Monaco';
    src: url(${Monaco}) format('truetype');
  }
  @font-face {
    font-family: 'Consolas';
    src: url(${Consolas}) format('truetype');
  }
  body {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    background-color: black;
    font-family: Monaco, Consolas, "Courier New", monospace;
  }
  .icon-link {
    background-size: 2rem;
    display: block;
    height: 2rem;
    width: 2rem;
    text-indent: -999px;
    background-repeat: no-repeat;
  }
  .github {
    background-image: url(${Github});
  }
  .twitter {
    background-image: url(${Twitter});
  }
  .linkedin {
    background-image: url(${LinkedIn});
  }
  .mail {
    background-image: url(${Mail});
  }
`;
