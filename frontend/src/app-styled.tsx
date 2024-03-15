import styled from "styled-components";

export const AppContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    background-color: #191970;
    min-height: 80vh;
    margin-top: .5vh;
    padding-left: 7vw;

    @media (max-width: 1400px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 960px){
        grid-template-columns: 1fr;
        padding-left: 19vw;
    }

`