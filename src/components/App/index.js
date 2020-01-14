import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import GlobalStyles from './GlobalStyles';
import Wrapper from './Wrapper'
import Menu from '../Menu'
import Container from '../shared/Container'
import { getMovies } from '../../reducers/movieReducer';
import Routes from '../Routes'
import { BrowserRouter } from 'react-router-dom'

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
      <BrowserRouter>
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

export default App;