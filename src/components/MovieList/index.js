import React from 'react'
import MovieCard from '../MovieCard'
import Heading from '../shared/Heading'
import Link from '../shared/Link'
import Container from '../shared/Container'
import Flex from '../shared/Flex'
import Grid from '../shared/Grid'
import styled from 'styled-components'

const StyledHeader = styled(Flex).attrs({
  as: "header",
  justifyBetween: true,
  alignCenter: true,
})`
  margin: 30px 0;
  padding-right: 30px;
`

const StyledMoviesContainer = styled(Grid).attrs(props => ({
  as: 'section',
  columns: 'repeat(auto-fit, minmax(250px, 280px))',
  justifyContentBetween: true,
  gap: '50px 30px'
}))`
`

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
      <StyledHeader>
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
      </StyledHeader>
      <StyledMoviesContainer>
        {movieCards()}
      </StyledMoviesContainer>
    </Container>
  )

  return (
    <Container key={`${categoryTitle} Movies`} as="section">
      <StyledHeader>
        <Heading.Two
          fontSize="32px"
          noMargin
        >
          {categoryTitle}
        </Heading.Two>
      </StyledHeader>
      <StyledMoviesContainer>
        {movieCards()}
      </StyledMoviesContainer>
    </Container>
  )
}

export default MovieList