import React from 'react';
import GlobalStyles from './GlobalStyles';
import Wrapper from './Wrapper'
import Menu from '../Menu'
import tmdbApi from '../../services/tmdb'

function App() {

  return (
    <Wrapper>
      <GlobalStyles />
      <Menu />
    </Wrapper>
  );
}

export default App;