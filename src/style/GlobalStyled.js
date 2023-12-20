import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const UseColor = {
  backgroundColor: "#c89f68",
  mainColor: "#f5dd00",
  buttonColor: "#d4bfa4",
  buttonText: "#674211",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
        color: #1d1d1d;
    }

    a{
        font-family: "Noto Sans KR", sans-serif;
        text-decoration: none;
        display: block;
        color: #1d1d1d;
    }

    ul, li{
        list-style: none;
    }

    body{
        letter-spacing: -1px;
        word-break: break-all;
        font-family: "Noto Sans KR", sans-serif;
        background-color: #f1f1f1;
    }
`;
