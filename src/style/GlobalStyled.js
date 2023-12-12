import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
    }

    ul, li{
        list-style: none;
    }

    body{
        letter-spacing: -1px;
        word-break: break-all;
        font-family: "Noto Sans KR", sans-serif;
    }
`;
