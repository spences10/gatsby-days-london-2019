import { useDeck } from 'gatsby-theme-mdx-deck'
import React from 'react'

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
  googleFont: `https://fonts.googleapis.com/css?family=${fonts()}`,
  fonts: {
    body: 'Poppins, sans-serif',
  },
  text: {
    heading: {
      color: '#fff',
      fontFamily: 'Montserrat Alternates',
      margin: '0 auto 0.5rem',
      textAlign: 'center',
    },
  },
  colors: {
    text: '#000',
    background: 'rebeccapurple',
    link: '#000',
    heading: '#000',
    quote: '#000',
    pre: '#333',
    preBackground: 'rgb(245, 242, 240)',
    code: '#333',
    codeBackground: 'transparent',
    figcaptionBackground: 'rebeccapurple',
    figcaption: '#fff',
  },
  styles: {
    body: {},
    Slide: {
      textAlign: 'center',
    },
    p: {
      fontSize: '3rem',
      margin: '1rem 0',
      textAlign: 'center',
      color: '#fff',
    },
    h1: {
      fontSize: '7rem',
      marginBottom: '0.25rem',
    },
    h2: {
      fontSize: '5rem',
      margin: '0.5rem 0',
    },
    figure: {
      textAlign: 'left',
    },
    code: {
      fontSize: 'inherit',
    },
    figcaption: {
      fontSize: '1.2rem',
    },
    li: {
      marginBottom: '0.5rem',
      textAlign: 'left',
    },
    img: {
      display: 'inline-block',
      objectFit: 'contain',
      maxHeight: '100vh',
    },
  },
  Provider,
}
