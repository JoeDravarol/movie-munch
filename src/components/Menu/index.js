import React from 'react'
import Nav from './Nav'
import UlElem from './UlElem'
import ListElem from './ListElem'
import Link from './Link'
import { withRouter } from 'react-router-dom'

const Menu = ({ location }) => {
  return (
    <Nav>
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
    </Nav>
  )
}

export default withRouter(Menu)