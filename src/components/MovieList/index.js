import React from 'react'
import Header from './Header'
import MovieCard from '../MovieCard'
import Heading from '../shared/Heading'
import Anchor from '../shared/Anchor'
import Container from '../shared/Container'
import MoviesContainer from './MoviesContainer'

const MovieList = ({ movies, categoryTitle, categoryLink }) => {
  const movieCards = () => {
    return movies.map((movie, idx) => {
      if (categoryLink && idx > 4) return null;

      return (
        <MovieCard
          title={movie.title}
          poster={`${'https://image.tmdb.org/t/p/w500' + movie.poster_path}`}
          rating={movie.vote_average}
          genres={movie.genre_ids}
        />
      )
    })
  }

  if (categoryLink) return (
    <Container as="section">
      <Header>
        <Heading.Two
          fontSize="32px"
          noMargin
        >
          {categoryTitle}
        </Heading.Two>
        <Anchor
          href={categoryLink}
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
    <Container as="section">
      <Header>
        <Heading.Two
          fontSize="32px"
          noMargin
        >
          {categoryTitle}
        </Heading.Two>
      </Header>
      <MoviesContainer>
        {movieCards()}
      </MoviesContainer>
    </Container>
  )
}

export default MovieList