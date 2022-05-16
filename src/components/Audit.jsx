import React, { useContext } from "react"
// ROUTER
import { Link } from "react-router-dom"
// CONTEXT
import { ContextData } from "../context/context"
// DATABASE
import { edifici } from "../database/edifici"

/******************/
/**   FUNCTION   **/
/******************/
export const Audit = () => {
  // CONTEXT
  const { supplier } = useContext(ContextData)

  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <div>
      <div className="audit-wrapper">
        <div className="audit-title">supplier preview</div>
        <form>
          <fieldset>
            <legend>{supplier[0].ditta || "ditta non presente"}</legend>
            <ul className="audit-ul">
              <li>AQ {supplier[0].oggetto}</li>
              <li>Lotto {supplier[0].lotto}</li>
              <li>CIG {supplier[0].cig}</li>
              {supplier[0].length !== 0 &&
                supplier[0].referenti.map((ref, i) => (
                  <li key={i}>
                    Ref. {ref.nome || "n.n."} {ref.cognome}
                  </li>
                ))}
            </ul>
          </fieldset>
          <div className="audit-title">generate audit</div>
          <div className="audit-input-wrapper">
            <div>
              <input type="date" />
            </div>
            <div>
              <input type="time" />
            </div>
            <div className="audit-edificio">
              <select>
                {edifici.map((edificio) => {
                  return (
                    <option key={edificio.label} value={edificio.value}>
                      {edificio.label}
                    </option>
                  )
                })}
              </select>
            </div>
            <Link to="/audit">
              {supplier[0].length !== 0 && (
                <button className="btn-audit" type="submit">
                  generate
                </button>
              )}
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
