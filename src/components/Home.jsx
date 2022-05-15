import React, { useContext } from "react"
//CONTEXT
import { ContextData } from "../context/context"

export const Home = () => {
  const { suppliers } = useContext(ContextData)

  return (
    <div className="home-wrapper">
      <div className="home-title">suppliers</div>
      <ul className="home-ul">
        {suppliers.map((supplier) => {
          return (
            <li key={supplier.ditta} className="home-li">
              <img src="https://via.placeholder.com/50" alt="logo-ditta" />
              <div className="home-ditta">{supplier.ditta}</div>
              <div className="home-tipo">{supplier.tipo}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
