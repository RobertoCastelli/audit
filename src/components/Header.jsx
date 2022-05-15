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
      <h1>audit polimi</h1>
      <div>react audit generator</div>
      <div>{today}</div>
      <hr />
    </div>
  )
}
