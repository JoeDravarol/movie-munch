import React from 'react'
import Link from './Link'

const Genres = ({ genreIds, movieTitle, numOfIdsToSlice, allGenresForMovie }) => {
  // Only grab two genre id
  genreIds = genreIds.slice(0, numOfIdsToSlice)

  const genreIdToName = () => {
    return genreIds.map(id =>
      allGenresForMovie.find(genre => genre.id === id)
    )
  }

  const genreList = () => {
    const genreNames = genreIdToName()
    // Add comma between each genre name
    const genreNamesWithComma = genreNames.map(genre => genre.name).join(", ").split(" ")

    return genreIds.map((id, idx) =>
      <Link
        key={movieTitle + id}
        to={`/genres/${genreNames[idx]}`}
        fontSize="14px"
        color="#f9ffff"
        hovercolor="#2D2D35"
      >
        {genreNamesWithComma[idx]}
      </Link>
    )
  }

  return (
    <>
      {genreList()}
    </>
  )
}

export default Genres