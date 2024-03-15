import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    padding: 1rem;

    label{
        font-size: 1.5rem;
    }

    input{
        margin: 0 1rem;
        border-radius: 24px;
        height: 4vh;
        font-size: 1.2rem;
        padding: 0 1vw;
    }
    
    button{
        width: 8vw;
        height: 5vh;
        background-color: blue;
        color: white;
        font-size: 1.2rem;
        border-radius: 24px;

        @media (max-width: 1400px){
            width: 20vw;

        } 

        @media (max-width: 960px){
            width: 30vw;
        }
    }

    @media (max-width: 1400px){
        flex-direction: column;
    }

    @media (max-width: 960px){
        grid-template-columns: 1fr;
        padding-left: 19vw;
    } 
`