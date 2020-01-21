import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ScrollMemory from 'react-router-scroll-memory'

import GlobalStyles from './GlobalStyles';
import Grid from '../shared/Grid'
import Menu from '../Menu'
import Container from '../shared/Container'
import Routes from './Routes'

import useInitializeMovie from '../../hooks/useInitializeMovie'

function App() {
  // Initialize Movies
  useInitializeMovie('now_playing')
  // useInitializeMovie('popular')
  // useInitializeMovie('upcoming')
  // useInitializeMovie('top_rated')

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