import styled from 'styled-components'

export const StyledForm = styled.form`
    .input-number, .input-submit {
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        width: 100px;
    }
    @media (max-width: 550px) {
        .input-number, .input-submit {
            font-size: 12px;
            width: 50px;
        }
    }
`