import React from 'react'
import Header from './Header'
import MovieCard from '../MovieCard'
import Heading from '../shared/Heading'
import Anchor from '../shared/Anchor'
import Container from './Container'
import MoviesContainer from './MoviesContainer'

const MovieList = (props) => {
  const movieCards = () => {
    return movies.map((movie, idx) => {
      if (props.categoryLink && idx > 4) return null;

      return (
        <MovieCard
          title={movie.title}
          poster={`${IMAGE_URL}${movie.poster_path}`}
          rating={movie.vote_average}
          genres={movie.genre_ids}
        />
      )
    })
  }

  if (props.categoryLink) return (
    <Container>
      <Header>
        <Heading.Two
          fontSize="32px"
          noMargin
        >
          {props.categoryTitle}
        </Heading.Two>
        <Anchor
          href={props.categoryLink}
          color="#f9ffff"
          hoverColor="#2D2D35"
        >
          See All
          </Anchor>
      </Header>
      <MoviesContainer
        gap="50px 30px"
      >
        {movieCards()}
      </MoviesContainer>
    </Container>
  )

  return (
    <Container>
      <Header>
        <Heading.Two
          fontSize="32px"
          noMargin
        >
          {props.categoryTitle}
        </Heading.Two>
      </Header>
      <MoviesContainer>
        {movieCards()}
      </MoviesContainer>
    </Container>
  )
}

export default MovieList