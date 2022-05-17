import React, { useContext } from "react"
// CONTEXT
import { ContextData } from "../context/context"

/******************/
/**   FUNCITON   **/
/******************/
export const AuditMainPage = () => {
  const { selectedEdificio, meseTestuale } = useContext(ContextData)

  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <div>
      {selectedEdificio} {meseTestuale}
    </div>
  )
}
