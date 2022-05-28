import React, { useContext } from "react"
// CONTEXT
import { ContextData } from "../context/context"

export const AuditResult = () => {
  // CONTEXT
  const { result } = useContext(ContextData)

  return (
    <div className="audit-result">
      esito{" "}
      <span
        className={
          result <= 50 ? "audit-result-negativo" : "audit-result-positivo"
        }
      >
        {result}%
      </span>
    </div>
  )
}
