import React, { useContext } from "react"
// CONTEXT
import { ContextData } from "../context/context"

/******************/
/**   FUNCTION   **/
/******************/
export const AuditReferenti = () => {
  // CONTEXT
  const { supplier, displayName } = useContext(ContextData)

  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <div>
      <ul className="audit-referenti">
        {supplier[0].referenti.map((ref, i) => {
          return (
            ref.nome !== "" && (
              <li key={i}>
                {ref.nome} {ref.cognome} - ditta {supplier[0].ditta}
              </li>
            )
          )
        })}
        <li> {displayName} - tecnico AGIS</li>
      </ul>
    </div>
  )
}
