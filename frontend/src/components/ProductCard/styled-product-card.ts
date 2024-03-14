import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    width: 20vw;
    height: 40vh;
    border-radius: 24px;
    margin: 1rem;
    padding: 3rem 0 2rem 0;

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
    }
`
