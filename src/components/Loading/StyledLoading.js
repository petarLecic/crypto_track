import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    0%{
        transform: scale(0);
    }
    50%{
        transform: scale(1);
    }
    100%{
        transform: scale(0);
    }
`
export const StyledLoading = styled.div`
    margin: 100px auto;
    height: 200px;
    width: 200px;
    div{
        height: inherit;
        width: inherit;
        position: absolute;
    }
    div>div{
        height: 25px;
        width: 25px;
        border-radius: 50%;
        background: grey;
        position: absolute;
        top: 0%;
        right: 50%;
        transform: translate(50%,0%) scale(0);
        animation: ${scale} 1.1s ease infinite
    }
    div:nth-child(2){
        transform: rotate(30deg);
    }
    div:nth-child(3){
        transform: rotate(60deg);
    }
    div:nth-child(4){
        transform: rotate(90deg);
    }
    div:nth-child(5){
        transform: rotate(120deg);
    }
    div:nth-child(6){
        transform: rotate(150deg);
    }
    div:nth-child(7){
        transform: rotate(180deg);
    }
    div:nth-child(8){
        transform: rotate(210deg);
    }
    div:nth-child(9){
        transform: rotate(240deg);
    }
    div:nth-child(10){
        transform: rotate(270deg);
    }
    div:nth-child(11){
        transform: rotate(300deg);
    }
    div:nth-child(12){
        transform: rotate(330deg);
    }
    div:nth-child(2)>div{
        animation-delay: 0.1s;
    }
    div:nth-child(3)>div{
        animation-delay: 0.2s;
    }
    div:nth-child(4)>div{
        animation-delay: 0.3s;
    }
    div:nth-child(5)>div{
        animation-delay: 0.4s;
    }
    div:nth-child(6)>div{
        animation-delay: 0.5s;
    }
    div:nth-child(7)>div{
        animation-delay: 0.6s;
    }
    div:nth-child(8)>div{
        animation-delay: 0.7s;
    }
    div:nth-child(9)>div{
        animation-delay: 0.8s;
    }
    div:nth-child(10)>div{
        animation-delay: 0.9s;
    }
    div:nth-child(11)>div{
        animation-delay: 1s;
    }
    div:nth-child(12)>div{
        animation-delay: 1.1s;
    }
`