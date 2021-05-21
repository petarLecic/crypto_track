import styled from 'styled-components'

export const StyledSingle = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    color: rgb(255, 255, 255);
    margin: 20px auto;
    padding: 30px;
    text-align: justify;
    width: 60%;
    img {
        display: block;
        margin: 0px auto;
        width: 100px;
    }
    h1 {
        font-size: 55px;
        text-align: center;
    }
    p, div {
        font-size: 17px;
        margin: 20px;
    }
    b, .urls-heading {
        border: 1px solid rgb(255, 255, 255);
        display: inline;
        font-size: 18px;
        margin-right: 8px;
        padding: 2px;
    }
    li {
        margin: 5px 0;
    }
    a {
        color: rgb(255, 255, 255);
    }
`