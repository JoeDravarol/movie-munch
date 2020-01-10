import styled, { css } from 'styled-components'

const baseStyle = css`
    margin-bottom: ${({ noMargin }) => noMargin && '0'};
    margin-top: ${({ noMargin }) => noMargin && '0'};
    color: #f9ffff;
    font-weight: 600;
    font-size: ${({ fontSize }) => fontSize && fontSize};
`

const One = styled.h1`
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 25px;
    ${baseStyle};
`

const Two = styled.h2`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    ${baseStyle};
`

const Three = styled.h3`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 15px;
    ${baseStyle};
`

const Four = styled.h4`
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 10px;
    ${baseStyle};
`

const Five = styled.h5`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
    ${baseStyle};
`

export default {
    One,
    Two,
    Three,
    Four,
    Five
}
