import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Navegacion from './nav'

const Header = ({ siteTitle }) => (
  <header 
    css={css`
        background-color : #333;
        padding : 1rem;
    `}
  >
    <div 
      css={css`
          max-width : 1200px;
          margin : 0 auto;
          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
      `}
    >
      <h1 
        css={css`
            color : #fff;
            text-align : center;
        `}
      >
        <Link
          to="/"
          css={css`
            color: black;
            text-decoration: none;
          `}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navegacion />
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: `Test`,
}

export default Header
