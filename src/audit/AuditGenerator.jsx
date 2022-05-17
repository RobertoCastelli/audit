import React, { useContext } from "react"
// COMPONENTS
import { Home } from "../components/Home"
// ROUTER
import { Link } from "react-router-dom"
// CONTEXT
import { ContextData } from "../context/context"
// DATABASE
import { edifici } from "../database/edifici"
// ICONS
import { AiOutlineAudit } from "react-icons/ai"

/******************/
/**   FUNCTION   **/
/******************/
export const AuditGenerator = () => {
  // CONTEXT
  const {
    orario,
    setOrario,
    giorno,
    setGiorno,
    supplier,
    setSelectedEdificio,
    getAuditData,
  } = useContext(ContextData)

  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <>
      {supplier.length !== 0 ? (
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
                <input
                  type="date"
                  value={giorno}
                  onChange={(e) => setGiorno(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="time"
                  value={orario}
                  onChange={(e) => setOrario(e.target.value)}
                />
              </div>
              <div className="audit-edificio">
                <select onChange={(e) => setSelectedEdificio(e.target.value)}>
                  {edifici.map((edificio) => {
                    return (
                      <option key={edificio.label} value={edificio.value}>
                        {edificio.label}
                      </option>
                    )
                  })}
                </select>
              </div>
              <Link to="/audit-main-page">
                <button
                  className="btn-audit"
                  type="submit"
                  onClick={() => getAuditData(giorno.substring(5, 7))}
                >
                  <AiOutlineAudit size={30} />
                </button>
              </Link>
            </div>
          </form>
        </div>
      ) : (
        <Home />
      )}
    </>
  )
}
