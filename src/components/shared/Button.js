import styled from 'styled-components'

export default styled.button.attrs((props) => ({
  color: props.color || 'inherit',
  background: props.background || 'inherit',
  padding: props.padding || '10px 15px',
  margin: props.margin || '20px',
  fontSize: props.fontSize || '20px',
  border: props.border || 'none',
  borderRadius: props.borderRadius || 'none',
}))`
  color: ${props => props.color};
  background: ${props => props.background};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  font-size: ${props => props.fontSize};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  outline: none;
  cursor: pointer;
  box-shadow: -10px 10px 30px 1px rgba(0,0,0,.3);
  
  &:hover {
    transform: translateY(3px)
  }
`