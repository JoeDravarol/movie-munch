import styled from 'styled-components'

export default styled.input.attrs(props => ({
  type: 'text',
  placeholder: 'Search for a movie...'
}))`
  flex-grow: 1;
  width: 100%;
  color: #fff;
  background: #239e80;
  border: 0;
  outline: 0;
  padding: .25em .5em;
  position: absolute;
  top: 50%;
  bottom: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 2;
  opacity: 0;
  cursor: pointer;

  &::placeholder {
    color: #fff;
    opacity: 1;
  }
`