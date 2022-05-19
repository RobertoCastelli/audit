import React from "react"

/******************/
/**   FUNCTION   **/
/******************/
export const AuditVerbalizza = () => {
  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <div>
      <div className="audit-bold-italic">si verbalizza</div>
      <div>
        che sono state verificate le seguenti attività programmate previste dal
        POS e che siano state svolte secondo le modalità contrattuali previse:
      </div>
      <textarea
        className="audit-verbalizza-textarea"
        rows="5"
        placeholder="Aggiungi Note"
        div
      ></textarea>
    </div>
  )
}
