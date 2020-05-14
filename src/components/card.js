import React from "react"
import Img from "gatsby-image"

const Card = ({ card, imageEdge }) => {
  const intentText = card => {
    let color

    if (card.intent === "aoe") {
      color = "text-red-600"
    } else if (card.intent === "heal") {
      color = "text-yellow-600"
    } else if (card.intent === "silence") {
      color = "text-green-600"
    }

    return <span className={`${color} text-lg`}>{card.intent}</span>
  }

  return (
    <div
      className={`${card.intent} flex flex-col -mb-6 items-center relative card`}
      role="img"
    >
      {imageEdge ? (
        <Img
          className="w-full z-10"
          fluid={imageEdge.node.fluid}
          alt={card.name}
        />
      ) : (
        <img
          className="w-full z-10"
          key={card.id}
          src={card.image}
          alt={card.name}
        />
      )}
      <div className="absolute bottom-0 transition-all duration-75 intent">
        {intentText(card)}
      </div>
    </div>
  )
}

export default Card
