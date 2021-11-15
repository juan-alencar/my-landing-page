import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     
    color: var(--white);
 }

 html, border-style, #root{
}

*, button, input{
   border: 0;
   background: none;
   font-family: Ubuntu, sans-serif;
}

html {
    max-width: 100vw;
    height: auto;
    width: 100%;
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
