import React from 'react'
import Nav from './Nav'
import UlElem from './UlElem'
import ListElem from './ListElem'
import Anchor from './Anchor'

const Menu = (props) => {
  return (
    <Nav>
      <UlElem>
        <ListElem active>
          <Anchor href="#">Discover</Anchor>
        </ListElem>
        <ListElem>
          <Anchor href="#">Now Playing</Anchor>
        </ListElem>
        <ListElem>
          <Anchor href="#">Popular</Anchor>
        </ListElem>
        <ListElem>
          <Anchor href="#">Upcoming</Anchor>
        </ListElem>
        <ListElem>
          <Anchor href="#">Top Rated</Anchor>
        </ListElem>
      </UlElem>
    </Nav>
  )
}

export default Menu