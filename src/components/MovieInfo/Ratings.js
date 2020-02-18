import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg.attrs(props => ({
  fill: props.fillStar ? '#f83646' : '#fff'
}))`
  width: 20px;
  height: 20px;
  fill: ${props => props.fill};
`

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: .7em 0;
  
  span {
    margin-right: 6px;
  }
`
const Ratings = ({ vote_average }) => {

  const generateStars = () => {
    const stars = []
    let votes = vote_average

    // Generate star filled with color
    while (votes > 0 && votes >= 2) {
      votes -= 2

      stars.push(
        <Svg fillStar xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>Star Rating</title>
          <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
        </Svg>
      )
    }

    // Generate remaining stars
    while (stars.length < 5) {
      stars.push(
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <title>Star Rating</title>
          <path d="M256 372.686L380.83 448l-33.021-142.066L458 210.409l-145.267-12.475L256 64l-56.743 133.934L54 210.409l110.192 95.525L131.161 448z" />
        </Svg>
      )
    }

    return stars
  }

  return (
    <Container>
      <span>{vote_average}</span>
      {generateStars()}
    </Container>
  )
}

export default Ratings