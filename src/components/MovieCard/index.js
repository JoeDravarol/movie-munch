import React from 'react'
import Heading from '../shared/Heading'
import Paragraph from '../shared/Paragraph'
import Genres from '../shared/Genres'
import Link from '../shared/Link'
import Image from '../shared/Image'
import styled from 'styled-components'

const MyLink = styled(Link)`
  transition: .2s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
`

const StyledPoster = styled(Image)`
  box-shadow: -30px 21px 70px -30px rgba(0,0,0,0.75);
`

const MovieCard = ({ id, title, poster, genreIds, rating }) => {

  return (
    <MyLink to={`/movie/${id}`}>
      <StyledPoster src={poster} alt={`${title}'s movie poster`} />
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