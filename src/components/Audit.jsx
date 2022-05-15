import React, { useContext } from "react"
// ROUTER
import { Link } from "react-router-dom"
// CONTEXT
import { ContextData } from "../context/context"
// DATABASE
import { edifici } from "../database/edifici"
// ICONS
import { FcAdvance, FcInspection } from "react-icons/fc"

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
        <h3 className="audit-title">supplier preview</h3>
        <form>
          <fieldset className="audit-fieldset">
            <legend className="supplier-legend">
              {supplier.ditta || "ditta non presente"}
            </legend>
            <ul>
              <li className="audit-ditta">AQ {supplier.oggetto}</li>
              <li className="audit-ditta">Lotto {supplier.lotto}</li>
              <li className="audit-ditta">CIG {supplier.cig}</li>
              {supplier.length !== 0 &&
                supplier.referenti.map((ref, i) => (
                  <li key={i}>
                    Ref. {ref.nome || "n.n."} {ref.cognome}
                  </li>
                ))}
            </ul>
          </fieldset>
          <h3 className="audit-title">generate audit</h3>
          <div className="audit-date">
            <input type="date" />
          </div>
          <div className="audit-time">
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
          <div className="audit-buttons">
            <Link to="/audit-page">
              {supplier.length !== 0 && (
                <button type="submit">
                  <FcAdvance size={20} />
                  <FcInspection size={20} />
                </button>
              )}
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
