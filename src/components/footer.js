import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Navegacion from './nav'

const Footer = ({ title, siteYear }) => (
  <>
    <footer 
      css={css`
          background-color : rgb(44, 62, 80);
          margin-top: 5rem;
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
        <Navegacion />
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
      </div>
    </footer>
    <p
        css={css`
            color: #fff;
            text-align : center;
            background-color : rgb(33, 44, 55);
            margin : 0;
            padding : 1rem;
        `}
    >Hotel Gatsby. Todos los derechos reservados {siteYear} &copy;</p>
  </>
)

Footer.defaultProps = {
  siteYear : new Date().getFullYear()
}

export default Footer
