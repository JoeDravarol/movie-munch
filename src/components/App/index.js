import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import ScrollMemory from 'react-router-scroll-memory'

import GlobalStyles from './GlobalStyles';
import Wrapper from './Wrapper'
import Menu from '../Menu'
import Container from '../shared/Container'
import Routes from './Routes'

import { getMovies } from '../../reducers/movieReducer';
import { initializeMoviesGenres } from '../../reducers/genresReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    function fetchData() {
      // Intialize movies genres
      dispatch(initializeMoviesGenres())

      // Initialize movies data
      dispatch(getMovies('now_playing'))
      // dispatch(getMovies('popular'))
      // dispatch(getMovies('upcoming'))
      // dispatch(getMovies('top_rated'))
    }
    fetchData()
  }, [dispatch])

  return (
    <Wrapper>
      <BrowserRouter>
        <ScrollMemory />
        <GlobalStyles />
        <Menu />
        <Container
          as="main"
          margin="0 60px 30px"
        >
          <Routes />
        </Container>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App