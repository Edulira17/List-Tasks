import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: "Inter", sans-serif;
        box-sizing: border-box;
    }

    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;

        
        background-color: #272626;
        color: #fff;
    }
`