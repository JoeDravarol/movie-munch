import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

import Link from '../shared/Link'
import TmdbLogo from './TmdbLogo'
import PopcornSvg from './PopcornSvg'

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 20%;
  max-width: 250px;
  position: sticky;
  top: 0;
`

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

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`

const StyledList = styled.li`
  padding: 15px;
  color: #848e94;
  border-left: 5px solid transparent;

  ${({ active }) => active && `
    border-left: 5px solid #238771;
    background: #2b3c46;
    color: #f9ffff;
  `}
`

const StyledLink =  styled(Link).attrs(props => ({
  fontSize: '18px',
  display: 'block'
}))`
  margin-left: 45%;
  transform: translate(-45%);
`

const Menu = ({ location }) => {
  return (
    <StyledNav>
      <header>
        <Logo>
          <PopcornSvg />Movie
          <span>Munch</span> 
        </Logo>
        <StyledUl>
          <StyledList active={location.pathname === '/'}>
            <StyledLink to="/">Discover</StyledLink>
          </StyledList>

          <StyledList active={location.pathname === '/now_playing'}>
            <StyledLink to="/now_playing">Now Playing</StyledLink>
          </StyledList>

          <StyledList active={location.pathname === '/popular'}>
            <StyledLink to="/popular">Popular</StyledLink>
          </StyledList>

          <StyledList active={location.pathname === '/upcoming'}>
            <StyledLink to="/upcoming">Upcoming</StyledLink>
          </StyledList>

          <StyledList active={location.pathname === '/top_rated'}>
            <StyledLink to="/top_rated">Top Rated</StyledLink>
          </StyledList>
        </StyledUl>
      </header>
      
      <TmdbLogo />
    </StyledNav>
  )
}

export default withRouter(Menu)