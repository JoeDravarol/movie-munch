import styled from 'styled-components'

export default styled.div.attrs(props => ({
  padding: props.padding ? props.padding : '0',
  margin: props.margin ? props.margin : '0',
  width: props.width ? props.width : 'auto',
  height: props.height ? props.height : 'auto'
}))`
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  width: ${props => props.width};
  height: ${props => props.height};
`