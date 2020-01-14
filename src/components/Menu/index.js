import React from 'react'
import Nav from './Nav'
import UlElem from './UlElem'
import ListElem from './ListElem'
import Link from './Link'

const Menu = (props) => {
  return (
    <Nav>
      <UlElem>
        <ListElem active>
          <Link to="/">Discover</Link>
        </ListElem>
        <ListElem>
          <Link to="/now_playing">Now Playing</Link>
        </ListElem>
        <ListElem>
          <Link to="/popular">Popular</Link>
        </ListElem>
        <ListElem>
          <Link to="/upcoming">Upcoming</Link>
        </ListElem>
        <ListElem>
          <Link to="/top_rated">Top Rated</Link>
        </ListElem>
      </UlElem>
    </Nav>
  )
}

export default Menu