import React, { useContext } from "react"
// CONTEXT
import { ContextData } from "../../context"

export const AuditIntestazione = () => {
  const { supplier, giorno, orario, selectedEdifici } = useContext(ContextData)

  return (
    <div>
      <div className="audit-page-oggetto">{supplier.oggetto}</div>
      <div className="audit-page-bold-italic">
        verbale verifica del {giorno.substring(8)}-{giorno.substring(5, 7)}-
        {giorno.substring(0, 4)}
      </div>
      <div>
        il giorno {giorno.substring(8)} del mese di {monthText} dell'anno{" "}
        {giorno.substring(0, 4)}, alle ore {orario} presso il fabbricato{" "}
        {selectedEdifici}, sono presenti:
      </div>
    </div>
  )
}
