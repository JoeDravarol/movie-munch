import styled from 'styled-components'

export default styled.a.attrs(props => ({
  color: props.color || 'inherit',
  hovercolor: props.hovercolor || '#f9ffff',
  fontSize: props.fontSize || '16px',
  display: props.display || 'inline',
}))`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  display: ${props => props.display};
  text-decoration: none;
  transition: .05s ease-in-out;
  
  &:hover {
    color: ${props => props.hovercolor};
  }
`