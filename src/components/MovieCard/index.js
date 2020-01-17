import React from 'react'
import Poster from './Poster'
import Heading from '../shared/Heading'
import Paragraph from '../shared/Paragraph'
import Container from './Container'
import Genres from '../shared/Genres'

const MovieCard = ({ title, poster, genreIds, rating, allGenresForMovie }) => {

  return (
    <Container>
      <Poster src={poster} alt={`${title}'s movie poster`} />
      <Heading.Three fontSize='18px' noMargin>
        {title}
      </Heading.Three>
      <Genres
        genreIds={genreIds}
        numOfIdsToSlice={2}
        movieTitle={title}
        allGenresForMovie={allGenresForMovie}
      />
      <Paragraph>&#9733; {rating}</Paragraph>
    </Container>
  )
}

export default MovieCard