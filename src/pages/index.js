import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Zephrys.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="flex max-w-sm w-full justify-between">
          <span
            style={{
              transform: "rotate(-30deg)",
            }}
            className="text-6xl font-bold text-green-600 silence mt-10"
          >
            ?
          </span>
          <span className="text-6xl font-bold text-red-600 aoe">?</span>
          <span
            style={{
              transform: "rotate(30deg)",
            }}
            className="text-6xl font-bold text-yellow-600 heal mt-10"
          >
            ?
          </span>
        </div>
        <div className="max-w-sm w-full">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="mt-10 max-w-lg border p-3 text-gray-400">
          <div>
            Data and images from{" "}
            <a className="text-green-500" href="https://hearthstonejson.com/">
              https://hearthstonejson.com
            </a>
          </div>
          <div>
            Idea from{" "}
            <a
              href="https://www.twitch.tv/crispywafflestv"
              className="text-green-500"
            >
              crispywafflestv
            </a>
          </div>
          <div>Made with Gatsby and Tailwind</div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
