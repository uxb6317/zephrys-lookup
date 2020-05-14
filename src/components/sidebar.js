import React from "react"
import { Link } from "gatsby"

const groups = [
  { name: "aoe", class: "text-red-600" },
  { name: "silence", class: "text-green-600" },
  { name: "heal", class: "text-yellow-600" },
  { name: "0", class: "text-blue-600" },
  { name: "1", class: "text-blue-600" },
  { name: "2", class: "text-blue-600" },
  { name: "3", class: "text-blue-600" },
  { name: "4", class: "text-blue-600" },
  { name: "5", class: "text-blue-600" },
  { name: "6", class: "text-blue-600" },
  { name: "7", class: "text-blue-600" },
  { name: "8", class: "text-blue-600" },
  { name: "9", class: "text-blue-600" },
  { name: "10", class: "text-blue-600" },
]

const Sidebar = () => {
  return (
    <div className="h-screen-16 fixed w-24 mt-16 flex flex-col bg-gray-900 overflow-y-auto sidebar">
      {groups.map(group => (
        <Link
          key={group.name}
          to={`/${group.name}`}
          activeClassName="bg-gray-800 font-semibold"
          className={`py-4 w-full text-lg text-center border-b border-gray-800 ${group.class}`}
        >
          {group.name}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
