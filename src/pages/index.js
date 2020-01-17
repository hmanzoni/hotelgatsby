import React from "react"
import { css } from "@emotion/core"
import styled from '@emotion/styled'

import Layout from "../components/layout"
import ImagenHotel from "../components/imagenHotel"
import ContenidoInicio from "../components/contenidoInicio"
import useHabitaciones from "../hooks/use-hab"
import HabtacionesPreview from "../components/habtacionesPreview"

const ListadoHab = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {

    const habitaciones = useHabitaciones();

    return (
      <Layout>
        <ImagenHotel />
        <ContenidoInicio />
        <h2 
            css={css`
                text-align: center;
                font-size: 5rem;
                margin-top: 3rem;
            `}
        >Nuestras habitaciones</h2>
        <ListadoHab>
          {habitaciones.map(habitacion => (
              <HabtacionesPreview 
                  key={habitacion.id}
                  habitacion={habitacion}
              />
          ))}
        </ListadoHab>
      </Layout>
    )
}
export default IndexPage
