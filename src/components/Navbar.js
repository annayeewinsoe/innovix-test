import React, { useState } from "react"
import "../css/navbar.css"
import { FaBars, FaChevronDown } from "react-icons/fa";
import NavItems from "./NavItems";
import english from "../img/english.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="nav">
      <div className="container">

        <div className="collapsible dropdown">
          <div>
            <FaBars size="20px" />
            All Category
            <FaChevronDown size="11px" className="link" onClick={() => setOpen(!open)} />
          </div>

          <div className="dropdown-menu">
            {open && <NavItems />}
          </div>
        </div>

        <div className="nav-items">
          <NavItems />

          <div className="language">
            <img src={english} alt="language" />
            <p>English</p>
            <FaChevronDown size="11px" color="#EEEEEE" />
          </div>
        </div>

      </div>

      {/* <div className="container">
        <div id="dropdown">
          {open && <NavItems />}
        </div>
      </div> */}
    </div>
  )
}
