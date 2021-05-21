import styled from 'styled-components'

export const StyledPagination = styled.nav`
    ul {
        align-items: center;
        background-color: rgba(180, 180, 180, 0.8);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: space-evenly;
        margin: 20px auto;
        padding: 0px 10px;
        width: 300px;
    }
    
    ul li {
        font-size: 18px;
        height: 50px;
        line-height: 50px;
        list-style: none;
        margin: 0 5px;
        text-align: center;
        width: 20%;
    }

    ul li:hover ,
    ul li.active {
        background: #383838;
        color: #fff;
        cursor: pointer;
    }
`