import styled from 'styled-components'

export default styled.li`
  padding: 15px;
  color: #848e94;
  border-left: 5px solid transparent;

  ${({ active }) => active && `
    border-left: 5px solid #238771;
    background: #2b3c46;
    color: #f9ffff;
  `}
`