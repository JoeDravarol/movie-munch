import styled from 'styled-components'
import Flex from '../shared/Flex'

export default styled(Flex).attrs({
  as: "header",
  justifyBetween: true,
  alignCenter: true,
})`
  margin: 30px 0;
  padding-right: 30px;
`