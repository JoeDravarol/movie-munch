import React from 'react'
import SearchBar from './SearchBar'
import Flex from '../shared/Flex'
import styled from 'styled-components'

const StyledContainer = styled(Flex).attrs(props => ({
  justifyEnd: true,
}))`
  margin: 20px 0;
`

const SearchMovie = (props) => {

  return (
    <StyledContainer>
      <SearchBar />
    </StyledContainer>
  )
}

export default SearchMovie