import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    width: 20vw;
    height: 60vh;
    border-radius: 24px;
    margin: 1rem;
    padding: 3rem 1rem;

    img {
        width: 80%;
        height: 80%;
        border-radius: 24px;
        margin: 1rem;
    }

    span{
        font-weight: 500;
        font-size: 1.5rem;
    }

    @media (max-width: 1400px){
        width: 30vw;
    }

    @media (max-width: 960px){
        width: 60vw;
    }
`

export const Buttons = styled.div`
    display: flex;
    margin-top: .5rem;
    gap: 1rem;
    padding-bottom: 1.5rem;

    button{
        background-color: blue;
        width: 5vw;
        height: 3vh;
        border-radius: 10px;
        border: none;
        color: white;
        font-size: .9rem;
        font-weight: 700;
        cursor: pointer;

        @media (max-width: 960px){
        width: 11vw;
    }
    }
`
