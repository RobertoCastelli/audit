import React, { useContext } from "react"
// CONTEXT
import { ContextData } from "../context/context"

/******************/
/**   FUNCTION   **/
/******************/
export const AuditPremesso = () => {
  // CONTEXT
  const { supplier, selectedEdificio } = useContext(ContextData)

  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <div>
      <div className="audit-bold-italic">premesso</div>
      <section className="audit-section">
        - visto che il contratto repertorio n°20/2018 del 28 novembre 2018 con
        il quale è stata affidato alla società {supplier[0].ditta} per la
        fornitura di {supplier[0].oggetto} - lotto {supplier[0].lotto} CIG{" "}
        {supplier[0].cig};
      </section>
      <section className="audit-section">
        - visto l'art. 5.3.6 "Verifiche di conformità in corso di esecuzione" e
        l'art. 8 "Controlli" del Capitolato recnico del Bando istitutivo di
        Consip;
      </section>
      <section className="audit-section">
        - visto il Programma Operativo dei Servizi per il periodo 2021 che
        prevedeva le attività di manutenzione ordinaria impianti elettrici
        presso il fabbricato {selectedEdificio}
      </section>
    </div>
  )
}
