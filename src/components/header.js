import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Navegacion from './nav'

const Header = ({ title }) => (
  <header 
    css={css`
        background-color : rgb(44, 62, 80);
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
    <Link
        to="/"
        css={css`
            color: #fff;
            text-align : center;
            text-decoration: none;
        `}
        >
          <h1>{title}</h1>
        </Link>
      <Navegacion />
    </div>
  </header>
)

export default Header
