import React from 'react'
import Form from './Form'
import SearchInput from './SearchInput'
import SearchBtn from './SearchBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props) => {

  return (
    <Form onSubmit="asdf">
      <SearchInput />
      <SearchBtn>
        <FontAwesomeIcon icon={faSearch} />
      </SearchBtn>
    </Form>
  )
}

export default SearchBar