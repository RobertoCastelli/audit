import React, { useContext } from "react"
// CONTEXT
import { ContextData } from "../context/context"
// IMAGES
import logo from "../images/poli-logo.png"

/******************/
/**   FUNCTION   **/
/******************/
export const AuditIntestazione = () => {
  // CONTEXT
  const { supplier, giorno, orario, meseTestuale, selectedEdificio } =
    useContext(ContextData)

  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <>
      <div className="audit-page-intestazione">
        <img className="audit-page-logo" src={logo} alt="poli-logo" />
        <div className="audit-page-oggetto">{supplier[0].oggetto}</div>
      </div>
      <div className="audit-page-bold-italic">
        verbale verifica del {giorno.substring(8)}-{giorno.substring(5, 7)}-
        {giorno.substring(0, 4)}
      </div>
      <div>
        il giorno {giorno.substring(8)} del mese di {meseTestuale} dell'anno{" "}
        {giorno.substring(0, 4)}, alle ore {orario} presso il fabbricato{" "}
        {selectedEdificio}, sono presenti:
      </div>
    </>
  )
}
