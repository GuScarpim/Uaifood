import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Open Sans Extra Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Open Sans Extra Bold'), url('./assets/fonts/OpenSans-ExtraBold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Open Sans Light';
    font-style: normal;
    font-weight: normal;
    src: local('Open Sans Light'), url('./assets/fonts/OpenSans-Light.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Open Sans Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Open Sans Regular'), url('./assets/fonts/OpenSans-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Open Sans Semi Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Open Sans Semi Bold'), url('./assets/fonts/OpenSans-SemiBold.ttf') format('ttf');
  }


  ::-webkit-scrollbar {
    width: 8px;
    background-color: #2e2e2e;
    -webkit-border-radius: 0px;
  }
  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
  ::-webkit-scrollbar-thumb:vertical {
    -webkit-border-radius: 0px;
    background: #2e2e2e;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    -webkit-border-radius: 0px;
    background: #2e2e2e;
  }
  ::-webkit-scrollbar {
    width: 9px;
    background-color: #CCC
  }
  ::-webkit-scrollbar:hover {
    background-color: #CCC;
  }
  ::-webkit-scrollbar-thumb:vertical {
    background: #2e2e2e;
  }
  body {
    padding: 0px;
    margin: 0px;
    background: #FFF;
    overflow-y: auto;
    overflow-x: auto;
  }
`

export default GlobalStyle;