import React from "react"

import Layout from "../components/layout"
import CardList from "../components/card-list"

export default function Group({ pageContext: { cards } }) {
  return (
    <Layout>
      <CardList cards={cards} />
    </Layout>
  )
}
