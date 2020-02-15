import React from 'react'
import Button from './Button'
import Flex from './Flex'

const LoadMore = ({ handleLoadMore }) => {
  
  return (
    <Flex
      justifyCenter
      alignCenter
    >
      <Button
        background="#FD4D55"
        color="#f9ffff"
        borderRadius="5px"
        onClick={handleLoadMore}
      >
        Load More
      </Button>
    </Flex>
  )
}

export default LoadMore