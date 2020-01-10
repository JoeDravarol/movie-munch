import styled from 'styled-components'

export default styled.div.attrs(props => ({
  columns: props.columns ? props.columns : 'auto',
  rows: props.rows ? props.rows : 'auto',
  autoCols: props.autoCols ? props.autoCols : 'auto',
  autoRows: props.autoRows ? props.autoRows : 'auto',
  autoFlow: props.autoFlow ? props.autoFlow : 'auto',
  gap: props.gap ? props.gap : '0'
}))`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-template-rows: ${props => props.rows};
  grid-auto-columns: ${props => props.autoCols};
  grid-auto-rows: ${props => props.autoRows};
  grid-auto-flow: ${props => props.autoFlow};
  grid-gap: ${props => props.gap};
  justify-self: ${props => {
    if (props.justifyStart) return 'start'
    else if (props.justifyEnd) return 'end'
    else if (props.justifyCenter) return 'center'
    return 'stretch'
  }};
  align-self: ${props => {
    if (props.alignStart) return 'start'
    else if (props.alignEnd) return 'end'
    else if (props.alignCenter) return 'center'
    return 'stretch'
  }};
  justify-items: ${props => {
    if (props.justifyItemsStart) return 'start'
    else if (props.justifyItemsEnd) return 'end'
    else if (props.justifyItemsCenter) return 'center'
    return 'stretch'
  }};
  align-items: ${props => {
    if (props.alignItemsStart) return 'start'
    else if (props.alignItemsEnd) return 'end'
    else if (props.alignItemsCenter) return 'center'
    return 'stretch'
  }};
  justify-content: ${props => {
    if (props.justifyContentCenter) return 'center'
    else if (props.justifyContentStretch) return 'stretch'
    else if (props.justifyContentAround) return 'space-around'
    else if (props.justifyContentBetween) return 'space-between'
    else if (props.justifyContentEvenly) return 'space-evenly'
    else if (props.justifyContentEnd) return 'end'
    return 'start'
  }};
  align-content: ${props => {
    if (props.alignContentCenter) return 'center'
    else if (props.alignContentStretch) return 'stretch'
    else if (props.alignContentAround) return 'space-around'
    else if (props.alignContentBetween) return 'space-between'
    else if (props.alignContentEvenly) return 'space-evenly'
    else if (props.alignContentEnd) return 'end'
    return 'start'
  }};
`