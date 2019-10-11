import { colors } from 'gatsby-design-tokens'
import { useDeck } from 'gatsby-theme-mdx-deck'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const SlidesCount = ({ children }) => {
  const css = {
    fontFamily: 'Poppins',
    fontSize: '1.15rem',
    padding: '0.5em',
    position: 'sticky',
    bottom: 0,
    textAlign: 'center',
  }

  return (
    <nav
      css={css}
      aria-label={`Slide ${children[0]} of ${children[2]}`}
    >
      {children}
    </nav>
  )
}

const Provider = ({ children }) => {
  const deck = useDeck()
  const { index, length } = deck

  return (
    <>
      {children}
      <SlidesCount>
        {index + 1}/{length}
      </SlidesCount>
    </>
  )
}

const fonts = () => {
  const list = [
    'Nunito:400,700|',
    'Poppins:400,700|',
    'Cherry+Swash:400,700|',
    'Montserrat+Alternates:400,700|',
    'Vollkorn:400,700|',
  ]
  return list.join('')
}

export default {
  initialColorMode: 'normal',
  useCustomProperties: true,
  fonts: {
    body: 'Poppins, sans-serif',
    monospace: '"Victor Mono", monospace',
  },
  text: {
    heading: {
      color: '#fff',
      fontFamily: 'Vollkorn',
      margin: '0 auto 0.5rem',
      textAlign: 'center',
    },
  },
  googleFont: `https://fonts.googleapis.com/css?family=${fonts()}`,
  colors: {
    text: colors.white,
    background: colors.purple[80],
    primary: colors.gatsby,
    gold: colors.yellow[50],
    invertedText: colors.text.primary,
    modes: {
      invert: {
        text: colors.text.primary,
        background: colors.white,
        primary: colors.gatsby,
      },
    },
  },
  styles: {
    Slide: {},
    b: {
      color: 'gold',
    },
    p: {
      fontSize: '3rem',
      margin: '1rem 0',
      textAlign: 'center',
      color: '#fff',
    },
    strong: {
      color: 'primary',
    },
    h1: {
      fontSize: '7rem',
      marginBottom: '0.25rem',
      fontWeight: 700,
      // margin: 0,
    },
    h2: {
      fontSize: '5rem',
      fontWeight: 700,
      color: colors.yellow[50],
      margin: '0.5rem 0',
      fontFamily: 'Montserrat Alternates',
    },
    h3: {
      fontSize: '3.5rem',
      fontWeight: 700,
      color: colors.purple[40],
      fontFamily: 'Cherry Swash',
    },
  },
  Provider,
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=${fonts()}');

  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  img,
  video {
    height: auto;
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }
  /* use for debugging only!! */
  /* * {
    outline: 1px solid red !important;
  } */
  *, *:before, *:after {
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    font-weight: 500;
    padding: 0;
    margin: 0;
    line-height: 1.5;
    overflow-x: initial;
    background-color: #639;
  }
  html {
    scroll-behavior: smooth;
  }
  a {
    text-decoration: none;
  }
  ul {
    margin: 0 auto;
    .task-list-item {
      list-style-type: none;
    }
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .embedVideoIframe {
    width: 100%;
  }
  span.small {
    font-size: 18px;
  }
  span.leftPad {
    padding-left: 18px;
  }  
  .mobCent {
    p { max-width: 780px; }
    text-align: center;
  }
`
