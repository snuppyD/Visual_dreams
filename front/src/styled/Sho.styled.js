import  styled  from "styled-components";

export const Blc = styled.div`
height: 35vh;
    position: relative;
    display: flex;
    align-items: center;
    background: linear-gradient(180deg, #191A43 0%, #442D85 100%);
    overflow: hidden;
`

export const H1 = styled.h1`
font-size: 60px;
    margin-bottom: 20px;
    opacity: 0;
    transform: translateY(20px);
    animation-duration: 1s;
    animation-delay: .5s;
    animation-name: fadeInAnimation;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    white-space: pre-line;`

export const Desc = styled.p`
font-size: 30px;
opacity: 0;
transform: translateY(20px);
animation-duration: 1s;
animation-delay: 1s;
animation-iteration-count: 1;
animation-fill-mode: forwards;
font-size: 30px;
color: rgba(255, 255, 255, 0.7);
white-space: pre-line;
text-transform: capitalize;
`