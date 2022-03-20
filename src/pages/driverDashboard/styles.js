import styled from "styled-components";

export const PageContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

`;


export const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;
    padding: 2%;
    
    @media (min-width:1024px){
        flex-direction: row;
    }
    
`;

export const LeftContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-start;
    order: 2;
    width: 100%;
    @media (min-width: 1024px) {
        order: 1;
        width: 65%;

    }
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    order: 1;
    width: 100%;
    @media (min-width: 1024px){
        order:2;
        width:25%
    }
`;