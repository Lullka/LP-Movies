import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    :root{
        --default-background-video-color: #0f0f0f;
        --default-background-color: #000;
        --default-icon-color: #FFF;
        --wideCollection-height: calc(100vh - 12.625rem);
        --default-header-background-color: #23252b;
        --default-header-background-color-black: #141518;
        --header-height: 80px;
        --text-color-hover: #ae8aff;
        --background-color-hover: #9b65ff30;
        --padding-video-controls: 0 30px;
    }

    html{
        scroll-behavior: smooth;
    }

    body{
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        overflow-x: hidden;
        background-color: var(--default-background-color);
    }
`;