import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
  body {
    margin: 0;
    padding: 0;
    background: #ffffff;
    font-family: 'Poppins', sans-serif;
    
  }
  .__portfolio{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;
