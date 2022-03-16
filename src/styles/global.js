import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
     margin:0;
     padding:0;
     box-sizing:border-box;
     outline:0;
    }
    html{
        height:100%
    }


    body{
    
       height:100%
  
    }

    #root{
        height:100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;

        --color-primary-100: #FA8223;
        --color-primary-50: #F79527;
        --color-secondary-100: #83F3FA;
        --color-secondary-50: #84F6FF80;
        --color-input: #F2F2F2;
        --grey-1: #222428;
    }

    body,button{
        font-size:16px;
        font-family: 'Nunito', sans-serif;
    }

    h1,h2,h3{
        font-weight: bold;
        font-size: 22px;
    }

    figcaption{
        display: none;
    }

    button{
        cursor:pointer;
    }
`;
