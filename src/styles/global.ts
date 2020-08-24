import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: 'Roboto Slab', serif;
    background: #fcf2eb;
    color: #779977;
    -webkit-font-smoothing: antialiased;
  }
  button, [type="button"], [type="reset"], [type="submit"]{
    -webkit-appearance: button;
  }
  button {
    width: 232px;
    height: 48px;
    left: 0px;
    top: 20px;

    background: #AD88AF;
    border-radius: 8px;
    font-family: 'Glass Antiqua', serif;
    font-weight: normal;
    font-size: 20px;
    color: #FCF2EB;
    border: 0;
    cursor: pointer;


  }


  input {
    width: 232px;
    height: 48px;
    left: 0px;
    top: 20px;
    padding-left: 8px;
    background: #89B0AE;
    border-radius: 8px;
    line-height: 1.5;
    font-family: 'Glass Antiqua', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #FCF2EB;
    border: 0;
    -webkit-appearance: none;
  }
  ::placeholder{
    color: #FCF2EB;

  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

`;
