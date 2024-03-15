import styled from "styled-components";

export const UpdateProductFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 1.5vw;

    label{
        font-size: 1.5rem;
    }

    input{
        margin: 0 1rem 1rem 0;
        border-radius: 24px;
        height: 4vh;
        font-size: 1.2rem;
        padding: 0 1vw;
    }
    
    button{
        width: 9vw;
        height: 6vh;
        background-color: blue;
        color: white;
        font-size: 1.2rem;
        border-radius: 24px;
        margin-top: 8vh;
        margin-right: 1.5vw;

        @media (max-width: 1400px){
            width: 20vw;

        } 

        @media (max-width: 960px){
            width: 30vw;
        }
    }
`