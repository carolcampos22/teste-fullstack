import styled from "styled-components";
import image from "../../assets/header-bg.jpg"

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: center;
    height: 20vh;
    font-size: 3rem;
    color: #fff;
    padding-left: 3vw;
`