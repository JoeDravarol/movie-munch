import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from './Button'
import Flex from './Flex'
import { getMovies } from '../../reducers/movieReducer'

const LoadMore = ({ movieType, initialPage }) => {
  const [pageToGet, setPageToGet] = useState(initialPage + 1)
  const dispatch = useDispatch()

  const handleOnClick = () => {
    dispatch(getMovies(movieType, pageToGet))
    // Increment the page internally to avoid the need
    // repeatedly of passing initialPage.
    setPageToGet(pageToGet + 1)
  }

  return (
    <Flex
      justifyCenter
      alignCenter
    >
      <Button
        background="#FD4D55"
        color="#f9ffff"
        borderRadius="5px"
        onClick={handleOnClick}
      >
        Load More
      </Button>
    </Flex>
  )
}

export default LoadMore