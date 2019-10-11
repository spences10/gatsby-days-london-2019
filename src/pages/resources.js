import React from 'react'
import { A } from '../components/a'
import { Layout } from '../components/layout'

export default () => {
  return (
    <Layout>
      <ul>
        <li>
          <A
            target="_blank"
            rel="noopener"
            href="https://thegatsbygal.com/"
          >
            Alexandra Spalato
          </A>
        </li>
        <li>
          <A
            target="_blank"
            rel="noopener"
            href="https://marcysutton.github.io/garbage-pail-components"
          >
            Marcy Sutton - Garbage Pail Components
          </A>
        </li>
        <li>
          <A
            target="_blank"
            rel="noopener"
            href="https://marcysutton.com/web-accessibility-resources"
          >
            Marcy Sutton - Web Accessibility Resources
          </A>
        </li>
        <li>
          <A
            target="_blank"
            rel="noopener"
            href="https://www.microsoft.com/design/inclusive/"
          >
            Microsoft Inclusive Design
          </A>
        </li>
        <li>
          <A
            target="_blank"
            rel="noopener"
            href="http://w3c.github.io/aria-practices/"
          >
            ARIA Authoring Practices
          </A>
        </li>
        <li>
          <A
            target="_blank"
            rel="noopener"
            href="https://webaim.org/projects/screenreadersurvey8/"
          >
            WebAIM - Screen Reader User Survey #8 Results
          </A>
        </li>
        <li>
          <A
            target="_blank"
            rel="noopener"
            href="https://www.littleandbig.com.au/portfolio/"
          >
            Alan Pooley - Little & Big
          </A>
        </li>
        <li>
          <A
            target="_blank"
            rel="noopener"
            href="https://gatsby-theme-legals.netlify.com/"
          >
            Theme Jam Winners - Gatsby Theme Legals
          </A>
        </li>
        <li>
          <A
            target="_blank"
            rel="noopener"
            href="https://wpostats.com/"
          >
            Web Performance Optimization (WPO)
          </A>
        </li>
      </ul>
    </Layout>
  )
}
