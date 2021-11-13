import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     
    color: var(--white);
 }

 html, border-style, #root{
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
 }

 *, button, input{
    border: 0;
    background: none;
    font-family: Ubuntu, sans-serif;
 }

 html {
    background: linear-gradient(to top right, var(--secondary), var(--primary));
 }
    :root{
        --primary: #07F49E;
        --secondary: #0B3866; 
        --white: #FFF;
        --black: #202020;
        --primary-hover: #08C590;
    }
`;
