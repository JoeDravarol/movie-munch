import React from 'react'
import Poster from './Poster'
import Heading from '../shared/Heading'
import Paragraph from '../shared/Paragraph'
import Container from './Container'

const MovieCard = ({ title, poster, genres, rating }) => {
  return (
    <Container>
      <Poster src={poster} alt={`${title}'s movie poster`} />
      <Heading.Three fontSize='18px' noMargin>
        {title}
      </Heading.Three>
      <Paragraph fontSize='14px'>
        {`${genres[0]}, ${genres[1]}`}
      </Paragraph>
      <Paragraph>&#9733; {rating}</Paragraph>
    </Container>
  )
}

export default MovieCard