import React, { useContext } from "react"
// CONTEXT
import { ContextData } from "../context/context"

/******************/
/**   FUNCTION   **/
/******************/
export const Header = () => {
  // CONTEXT
  const { today, displayName } = useContext(ContextData)

  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <div className="header-wrapper">
      <h1 className="header-title">audit polimi</h1>
      <div className="header-subtitle">audit generator</div>
      <div className="header-content">
        <div className="header-user">{displayName}</div>
        <div className="header-today">{today}</div>
      </div>
      <hr />
    </div>
  )
}
