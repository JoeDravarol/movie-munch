import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const StyledForm = styled.form`
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
    width: 300px;

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

  @media (max-width: 800px) {
    &:focus-within {
      width: 250px;
    }
  }

  @media (min-width: 1600px) {
    &:focus-within {
      width: 30%;
    }
  }
`

const StyledSearchBtn = styled.button`
  width: var(--size);
  height: var(--size);
  background: #239e80;
  color: #fff;
  font-size: 1.25rem;
  border: 0;
  border-radius: 50%;
  padding-left: auto;
  cursor: pointer;
  transition: background 200ms ease-out;
`

const StyledSearchInput = styled.input.attrs(props => ({
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

  @media (max-width: 800px) {
    font-size: .75em;
  }
`

const SearchBar = (props) => {
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Change spaces to plus
    const movieToQuery = e.target.movieQuery.value.split(" ").join("+")

    // If Not empty string
    if (movieToQuery !== '') {
      history.push(`/search/${movieToQuery}`)
    }

    e.target.movieQuery.value = ''
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledSearchInput name="movieQuery" />

      <StyledSearchBtn>
        <FontAwesomeIcon icon={faSearch} />
      </StyledSearchBtn>
    </StyledForm>
  )
}

export default SearchBar