import React from 'react'
import Image from 'gatsby-image'
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from '@emotion/styled'

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44, 62, 80, .85);
    width: 95%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

const HabtacionesPreview = ({habitacion}) => {

    const {contenido, imagen, titulo, slug} = habitacion;
    return (
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
            `}
        >
            <Image fluid={imagen.fluid} />
            <div
                css={css`
                    padding: 2rem;
                `}
            >
                <h3 css={css`
                        font-size: 3rem;
                    `}
                >{titulo}</h3>
                <p>{contenido}</p>
                <Boton to={slug}>Ver habitacion</Boton>
            </div>
        </div>
    );
};

export default HabtacionesPreview;