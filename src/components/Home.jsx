import React, { useContext } from "react"
// ROUTER
import { Link } from "react-router-dom"
// CONTEXT
import { ContextData } from "../context/context"
// IMGES
import icona from "../images/poli-icona.png"

/******************/
/**   FUNCTION   **/
/******************/
export const Home = () => {
  // CONTEXT
  const { suppliers, getSupplier, userState } = useContext(ContextData)

  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <>
      {userState ? (
        <div className="home-wrapper">
          <div className="home-title">suppliers</div>
          <ul className="home-ul">
            {suppliers.map((supplier) => {
              return (
                <Link to="/audit" key={supplier.ditta}>
                  <li onClick={() => getSupplier(supplier.ditta)}>
                    <img src={supplier.src} alt="logo-ditta" />
                    <div className="home-ditta">{supplier.ditta}</div>
                    <div className="home-tipo">{supplier.tipo}</div>
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      ) : (
        <img className="home-not-auth" src={icona} alt={icona}></img>
      )}
    </>
  )
}
