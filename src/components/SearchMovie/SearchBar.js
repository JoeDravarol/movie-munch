import React from 'react'
import Form from './Form'
import SearchInput from './SearchInput'
import SearchBtn from './SearchBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

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
    <Form onSubmit={handleSubmit}>
      <SearchInput name="movieQuery" />
      <SearchBtn>
        <FontAwesomeIcon icon={faSearch} />
      </SearchBtn>
    </Form>
  )
}

export default SearchBar