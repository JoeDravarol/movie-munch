import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ScrollMemory from 'react-router-scroll-memory'
import styled from 'styled-components'

import GlobalStyles from './GlobalStyles';
import Flex from '../shared/Flex'
import Menu from '../Menu'
import Routes from './Routes'
import SearchMovie from '../SearchMovie'

import useInitializeMovie from '../../hooks/useInitializeMovie'

const Main = styled.main`
  margin: 0 60px 30px;
  flex-grow: 1;
  width: auto;
  height: auto;
`

function App() {
  // Initialize Movies
  // useInitializeMovie('now_playing')
  // useInitializeMovie('popular')
  // useInitializeMovie('upcoming')
  // useInitializeMovie('top_rated')

  return (
    <Flex>
      <BrowserRouter>
        <ScrollMemory />
        <GlobalStyles />
        <Menu />
        <Main>
          <SearchMovie />
          <Routes />
        </Main>
      </BrowserRouter>
    </Flex>
  );
}

export default App