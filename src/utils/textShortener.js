export default (text, limit) => {
  const newText = []

  if (text.length > limit) {
    text.split(' ').reduce((acc, cur) => {
      // Check all words are still under limit
      if (acc + cur.length <= limit) {
        newText.push(cur)
      }
      return acc + cur.length
    }, 0)

    // Return shortend text
    return `${newText.join(' ')}...`
  }

  return text
}