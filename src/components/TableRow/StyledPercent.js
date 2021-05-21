import styled from 'styled-components'

export const StyledPercent = styled.td`
    color: ${props => {
        if (props.percent < 0) return 'rgb(240, 0, 0)'
        if (props.percent > 0) return 'rgb(3, 185, 42)'
        else return
    }};
    text-shadow: 1px 0.5px black;
`