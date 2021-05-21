import styled from 'styled-components'

export const StyledTableRow = styled.tr`
    height: 50px;
    td {
        font-size: 17px;
        width: 15%;
    }
    a {
        color: unset;
        margin-left: 5px;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    ${props => {
        if (props.isHeader) {
            return {
                backgroundColor: 'rgba(80, 80, 80, 0.8)',
                color: 'rgb(255, 255, 255)',
                fontWeight: 'bold'
            }
        }
    }}
`