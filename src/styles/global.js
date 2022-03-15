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
    }

    body,button{
 
        font-size:16px;
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
