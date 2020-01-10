import styled from 'styled-components'
import Anchor from '../shared/Anchor'

export default styled(Anchor).attrs(props => ({
  fontSize: '18px',
  display: 'block'
}))`
  margin-left: 45%;
  transform: translate(-45%);
`