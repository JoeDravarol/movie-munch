import React from 'react'
import styled from 'styled-components'
import textShortener from '../../utils/textShortener'

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-top: 2em;
  padding: 0 1.5%;
  color: #fff;
`

const Title = styled.h3`
  font-size: 1.5em;
`

const Card = styled.div`
  background: #375868;
  padding: 2em;
  margin-bottom: 1.75em;
  min-height: 200px;
`

const CardTitle = styled.h4`
  margin: 0;
  font-size: 1.2em;
`

const CardDesc = styled.p`
  color: #adbec8;
  font-size: 1.1em;
  line-height: 1.4;
`

const CardLink = styled.a`
  color: #ead6f0;
  text-decoration: none;
  display: inline-block;
  margin-top: 1em;

  &:hover {
    color: #fff;
  }
`

const Reviews = ({ data }) => {

  if (!data.length) {
    return (
      <Container>
        <Title>Popular Reviews</Title>

        <Card>
          <CardTitle>No Reviews Found</CardTitle>
        </Card>
      </Container>
    )
  }
  return (
    <Container>
      <Title>Popular Reviews</Title>

      {data.map(review => (
        <Card key={review.id}>
          <CardTitle>{review.author}</CardTitle>
          <CardDesc>
            {textShortener(review.content, 500)}
          </CardDesc>
          <CardLink href={review.url} target="_blank">See full reviews</CardLink>
        </Card>
      ))}

    </Container>
  )
}

export default Reviews