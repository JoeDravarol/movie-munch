import React from 'react'
import styled from 'styled-components'

import Ratings from './Ratings'
import { useHistory } from 'react-router-dom'
import textShortener from '../../utils/textShortener'

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  color: #FFF;
  max-width: 1390px;
  min-height: 450px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`

const PosterImage = styled.img`
  display: none;
  width: 100%;
  min-width: 350px;
  max-width: 400px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;

  @media (min-width: 750px) {
    display: block;
  }
`

const BackdropImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  margin-bottom: 1em;

  @media (min-width: 750px) {
    display: none;
  }
`

const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  text-transform: uppercase;
`

const Content = styled.div`
  padding: 0 3em;
  max-width: 900px;
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    padding: 0;
  }
`

const GenreUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`

const GenreLi = styled.li`
  margin-right: .75em;
`

const SynopsisTitle = styled.h3`
  font-size: 1.5em;
`

const SynopsisDesc = styled.p`
  font-size: 1.1em;
  color: #adbec8;
  line-height: 1.4;

  @media (max-width: 800px) {
    font-size: 0.9em;
  }
`

const BackBtn = styled.button`
  padding: 10px 35px;
  color: inherit;
  background: #F83646;
  border-color: transparent;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: -53px 71px 134px -77px rgba(0,0,0,0.75);
  transition: all .15s ease-in-out;
  margin-top: auto;
  width: 150px;

  &:hover {
    transform: translateY(5px)
  }
`

const Info = ({ data }) => {
  const history = useHistory()
  const baseImageUrl = 'https://image.tmdb.org/t/p/w780'

  return (
    <Container>
      <BackdropImage src={baseImageUrl + data.backdrop_path} alt={`${data.title}'s backdrop poster`} />
      <PosterImage src={baseImageUrl + data.poster_path} alt={`${data.title}'s poster`} />

      <Content>
        <header>
          <Title>{data.title}</Title>
          <Ratings vote_average={data.vote_average} />
          <GenreUl>
            {data.genres.map(genre =>
              <GenreLi key={genre.id}>{genre.name}</GenreLi>
            )}
          </GenreUl>
        </header>
        <div class="synopsis">
          <SynopsisTitle>Synopsis</SynopsisTitle>
          <SynopsisDesc>
            {textShortener(data.overview, 420)}
          </SynopsisDesc>
        </div>
        <BackBtn onClick={history.goBack}>Back</BackBtn>
      </Content>
    </Container>
  )
}

export default Info