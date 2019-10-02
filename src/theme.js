import { useDeck } from 'gatsby-theme-mdx-deck'
import React from 'react'

const Slides = ({ children }) => {
  const css = {
    fontSize: '1.15rem',
    padding: '0.5em',
    position: 'absolute',
    right: 0,
    top: 0,
    textAlign: 'right'
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

const Provider = props => {
  const deck = useDeck()
  const { index, length } = deck

  return (
    <>
      {props.children}
      <Slides>
        {index + 1}/{length}
      </Slides>
    </>
  )
}

export default {
  Provider
}
