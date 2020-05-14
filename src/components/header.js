import React from "react"

import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  return (
    <header className="h-16 flex items-center fixed w-full z-50 px-4 bg-gray-900 text-gray-100 shadow md:px-10">
      <div className="flex items-baseline w-full">
        <Link to="/">
          <h1 className="text-2xl flex-shrink-0">{siteTitle}</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header
