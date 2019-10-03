import { colors } from 'gatsby-design-tokens'
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
  initialColorMode: 'normal',
  useCustomProperties: true,
  fonts: {
    body: 'Poppins, sans-serif',
    monospace: '"Victor Mono", monospace',
  },
  text: {
    heading: {
      color: '#fff',
      fontFamily: 'Montserrat Alternates',
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
    },
    h3: {
      fontSize: '3.5rem',
      fontWeight: 700,
      color: colors.purple[40],
      mt: 10,
    },
  },
  Provider,
}
