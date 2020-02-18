import React from 'react'

import Info from './Info'
import Reviews from './Reviews'


const MovieInfo = ({ movie, reviews }) => {
  return (
    <section>
      <Info data={movie} />
      <Reviews data={reviews} />
    </section>
  )
}

export default MovieInfo