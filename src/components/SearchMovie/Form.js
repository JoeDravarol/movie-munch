import styled from 'styled-components'

export default styled.form`
  --size: 50px;

  display: flex;
  font-size: 1.25em;
  color: #fff;
  background: #239e80;
  padding: 3px;
  width: var(--size);
  height: var(--size);
  border: 2px solid transparent;
  border-radius: 100px;
  position: relative;
  overflow: hidden;
  transition: width 250ms ease-in-out;

  &:focus-within {
    width: 35%;

    input[type] {
      width: calc(100% - 80px);
      opacity: 1;
      z-index: initial;
      cursor: initial;
    }

    button {
      padding-right: auto;
      box-shadow: 0 0 10px rgba(0,0,0,.4);

      &:hover,
      &:focus {
        outline: 0;
        box-shadow: 0 0 10px rgba(0,0,0,.7);
      }
    }
  }
`