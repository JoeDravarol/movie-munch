import React from 'react'
import Poster from './Poster'
import Heading from '../shared/Heading'
import Paragraph from '../shared/Paragraph'
import Container from './Container'
import Genres from '../shared/Genres'
import Link from '../shared/Link'
import styled from 'styled-components'

const MyLink = styled(Link)`
  transition: .2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`
const MovieCard = ({ id, title, poster, genreIds, rating }) => {

  return (
    <MyLink to={`/movie/${id}`}>
      <Poster src={poster} alt={`${title}'s movie poster`} />
      <Heading.Three fontSize='18px' noMargin>
        {title}
      </Heading.Three>
      <Genres
        genreIds={genreIds}
        numOfIdsToSlice={2}
        movieTitle={title}
      />
      <Paragraph>&#9733; {rating}</Paragraph>
    </MyLink>
  )
}

export default MovieCard