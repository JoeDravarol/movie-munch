import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  display: none;
  color: #fff;
  font-size: 2.5em;
  border: none;
  background: transparent;
  outline-color: #239e80;
  padding: 0;
  position: absolute;
  top: 5%;
  left: 0.5em;
  z-index: 10;
  cursor: pointer;

  @media (max-width: 800px) {
    display: block;
  }
`

const Hamburger = ({ toggleOpen }) => {

  return (
    <StyledButton onClick={toggleOpen}>
      ☰
    </StyledButton>
  )
}

export default Hamburger