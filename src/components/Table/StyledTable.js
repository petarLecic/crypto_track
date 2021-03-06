import styled from 'styled-components'

export const StyledTable = styled.table`
    background-color: rgba(0, 0, 0, 0.3);
    border-collapse: collapse;
    margin: 20px auto;
    padding: 10px 0;
    text-align: center;
    max-width: 800px;
    tbody > :nth-child(odd){
        background-color: rgba(255, 255, 255, 0.8);
        color: rgb(0 ,0 ,0);
        text-shadow: 0.5px 0 rgb(0 ,0 ,0);
    }
    tbody > :nth-child(even){
        background-color: rgba(180, 180, 180, 0.8);
        color: white;
        text-shadow: 0.5px 0 rgb(0 ,0 ,0);
    }
    @media (max-width: 550px) {
        width: 100%;
    }
`