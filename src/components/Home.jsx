import React, { useContext } from "react"
// ROUTER
import { Link } from "react-router-dom"
// CONTEXT
import { ContextData } from "../context/context"
// IMAGES
import itaf from "../images/itaf-logo.png"

/******************/
/**   FUNCTION   **/
/******************/
export const Home = () => {
  // CONTEXT
  const { suppliers, getSupplier } = useContext(ContextData)

  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <div className="home-wrapper">
      <div className="home-title">suppliers</div>
      <ul className="home-ul">
        {suppliers.map((supplier) => {
          return (
            <Link to="/audit" key={supplier.ditta}>
              <li onClick={() => getSupplier(supplier.ditta)}>
                <img src={itaf} alt="logo-ditta" />
                <div className="home-ditta">{supplier.ditta}</div>
                <div className="home-tipo">{supplier.tipo}</div>
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}
