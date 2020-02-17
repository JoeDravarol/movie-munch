import React from 'react'
import Header from './Header'
import MovieCard from '../MovieCard'
import Heading from '../shared/Heading'
import Link from '../shared/Link'
import Container from '../shared/Container'
import MoviesContainer from './MoviesContainer'

const MovieList = ({ movies, categoryTitle, categoryLink }) => {

  const movieCards = () => {
    return movies.map((movie, idx) => {
      if (categoryLink && idx > 4) return null;

      return (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={`${'https://image.tmdb.org/t/p/w500' + movie.poster_path}`}
          rating={movie.vote_average}
          genreIds={movie.genre_ids}
        />
      )
    })
  }

  if (categoryLink) return (
    <Container key={`${categoryTitle} Movies`} as="section">
      <Header>
        <Heading.Two
          fontSize="32px"
          noMargin
        >
          {categoryTitle}
        </Heading.Two>
        <Link
          to={categoryLink}
          color="#f9ffff"
          hovercolor="#2D2D35"
        >
          See All
        </Link>
      </Header>
      <MoviesContainer>
        {movieCards()}
      </MoviesContainer>
    </Container>
  )

  return (
    <Container key={`${categoryTitle} Movies`} as="section">
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