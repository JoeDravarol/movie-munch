import styled from 'styled-components'
import Grid from '../shared/Grid'

export default styled(Grid).attrs(props => ({
  as: 'section',
  columns: 'repeat(auto-fit, minmax(250px, 280px))',
  justifyContentBetween: true,
  gap: props.gap ? props.gap : '50px'
}))`
`