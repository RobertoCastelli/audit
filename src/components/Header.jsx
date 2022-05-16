import React, { useContext } from "react"
// CONTEXT
import { ContextData } from "../context/context"

/******************/
/**   FUNCTION   **/
/******************/
export const Header = () => {
  // CONTEXT
  const { today } = useContext(ContextData)

  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <div className="header-wrapper">
      <div className="header-title">audit polimi</div>
      <div className="header-subtitle">audit generator</div>
      <div className="header-today">{today}</div>
      <hr />
    </div>
  )
}
