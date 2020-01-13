import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import GlobalStyles from './GlobalStyles';
import Wrapper from './Wrapper'
import Menu from '../Menu'
import Container from '../shared/Container'
import Discover from '../Discover'
import { getMovies } from '../../reducers/movieReducer';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    function fetchAllMoviesType() {
      // Initialize movies data
      dispatch(getMovies('now_playing'))
      dispatch(getMovies('popular'))
      dispatch(getMovies('upcoming'))
      dispatch(getMovies('top_rated'))
    }
    fetchAllMoviesType()
  }, [dispatch])

  return (
    <Wrapper>
      <GlobalStyles />
      <Menu />
      <Container
        as="main"
        margin="0 60px 30px"
      >
        <Discover />
      </Container>
    </Wrapper>
  );
}

export default App;