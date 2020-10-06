import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        background-color: #f2f2f2;
    }

    :root {
        --main-gray2: #4f4f4f;
    }

    ul { list-style-type: none; }
    a { text-decoration: none; }



`;
