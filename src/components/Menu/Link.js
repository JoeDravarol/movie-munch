import styled from 'styled-components'
import Link from '../shared/Link'

export default styled(Link).attrs(props => ({
  fontSize: '18px',
  display: 'block'
}))`
  margin-left: 45%;
  transform: translate(-45%);
`