import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { normalizeFilename } from "../utils"
import Card from "./card"

const CardList = ({ cards }) => {
  const data = useStaticQuery(graphql`
    {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
      }}
      className="grid pb-10 -mt-10"
    >
      {cards.map(card => {
        const imageEdge = data.allImageSharp.edges.find(edge => {
          return normalizeFilename(edge.node.fluid.src).includes(
            card.name.replace(":", " ") // fix for cards like "Power Word: Shield"
          )
        })

        return <Card key={card.id} card={card} imageEdge={imageEdge} />
      })}
    </div>
  )
}

export default CardList
