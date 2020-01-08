import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  ${styledNormalize}

  body {
    background: radial-gradient(circle at top right, #53798c, #1e2931);
    min-height:100vh;
    font-family: Helvetica, Arial, sans-serif;
  }
`