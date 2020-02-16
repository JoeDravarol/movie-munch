import React from 'react'
import Nav from './Nav'
import UlElem from './UlElem'
import ListElem from './ListElem'
import Link from './Link'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import TmdbLogo from './TmdbLogo'
import PopcornSvg from './PopcornSvg'

const Logo = styled.h1`
  color: #F83646;
  text-align: center;
  font-size: 3.5em;
  margin-top: 10px;
  line-height: 1;

  svg {
    width: 35px;
    height: 35px;
    margin: 0;
    padding: 0;
  }

  span {
    display: block;
  }
`

const Menu = ({ location }) => {
  return (
    <Nav>
      <header>
        <Logo>
          <PopcornSvg />Movie
          <span>Munch</span> 
        </Logo>
        <UlElem>
          <ListElem active={location.pathname === '/'}>
            <Link to="/">Discover</Link>
          </ListElem>
          <ListElem active={location.pathname === '/now_playing'}>
            <Link to="/now_playing">Now Playing</Link>
          </ListElem>
          <ListElem active={location.pathname === '/popular'}>
            <Link to="/popular">Popular</Link>
          </ListElem>
          <ListElem active={location.pathname === '/upcoming'}>
            <Link to="/upcoming">Upcoming</Link>
          </ListElem>
          <ListElem active={location.pathname === '/top_rated'}>
            <Link to="/top_rated">Top Rated</Link>
          </ListElem>
        </UlElem>
      </header>
      
      <TmdbLogo />
    </Nav>
  )
}

export default withRouter(Menu)