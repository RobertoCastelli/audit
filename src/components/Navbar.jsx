import React from "react"
// ROUTER
import { Link, NavLink } from "react-router-dom"
// ICONS
import { FcKey, FcHome, FcAddDatabase } from "react-icons/fc"
// IMAGES
import icona from "../images/icona.png"

/******************/
/**   FUNCTION   **/
/******************/
export const Navbar = () => {
  // STYLE ACTIVE LINKS
  let activeClassName = "navbar-li-active"

  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-icon">
        <Link to="/">
          <img className="img-navbar-icon" src={icona} alt="icon" />
        </Link>
      </div>

      <ul className="navbar-ul">
        <li className="navbar-li-link">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="navbar-li-icon">
              <FcHome size={20} />
            </div>
            <div>home</div>
          </NavLink>
        </li>

        <li className="navbar-li-link">
          <NavLink
            to="/supplier"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="navbar-li-icon">
              <FcAddDatabase size={20} />
            </div>
            <div>supplier</div>
          </NavLink>
        </li>

        <li className="navbar-li-link">
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            <div className="navbar-li-icon">
              <FcKey size={20} />
            </div>
            <div>auth</div>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
