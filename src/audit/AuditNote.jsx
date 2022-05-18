import React, { useContext } from "react"
// CONTEXT
import { ContextData } from "../context/context"

/******************/
/**   FUNCTION   **/
/******************/
export const AuditNote = () => {
  // CONTEXT
  const { giorno, orario } = useContext(ContextData)

  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <div>
      <textarea
        className="audit-note-textarea"
        rows="5"
        placeholder="Aggiungi Note"
      ></textarea>

      <div className="audit-note-difformita">
        le difformità verranno evase entro il:
      </div>
      <input className="audit-note-giorno" type="date" value={giorno} />

      <div className="audit-note-chiusura">
        il presente verbale viene chiuso alle ore:
      </div>
      <input className="audit-note-ore" type="time" value={orario} />
    </div>
  )
}
