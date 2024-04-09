import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        font-family: 'Roboto', sans-serif;
    },
    body,
    #root {
        height: 100vh;
        background-color: #FFF;
        flex: 1;
    }
`;

export default GlobalStyle;