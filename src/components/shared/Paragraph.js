import styled from 'styled-components'

export default styled.p`
  color: #f9ffff;
  margin: 10px 0;
  font-size: ${({ fontSize }) => fontSize ? `${fontSize};` : '16px;'}
`