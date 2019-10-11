import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from '../theme'

const Wrapper = styled.main`
  max-width: 700px;
  margin: 0 auto;
  margin-top: 200px;
  ul {
    font-family: Vollkorn;
    font-size: 30px;
    a {
      color: #fff;
    }
    a:hover {
      color: hotpink;
    }
  }
`

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      {children}
    </Wrapper>
  )
}
