import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import ScrollMemory from 'react-router-scroll-memory'

import GlobalStyles from './GlobalStyles';
import Grid from '../shared/Grid'
import Menu from '../Menu'
import Container from '../shared/Container'
import Routes from './Routes'

import { getMovies } from '../../reducers/movieReducer';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    function fetchData() {
      // Initialize movies data
      dispatch(getMovies('now_playing'))
      // dispatch(getMovies('popular'))
      // dispatch(getMovies('upcoming'))
      // dispatch(getMovies('top_rated'))
    }
    fetchData()
  }, [dispatch])

  return (
    <Grid
      columns="minmax(200px, 250px) 1fr"
    >
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
    </Grid>
  );
}

export default App