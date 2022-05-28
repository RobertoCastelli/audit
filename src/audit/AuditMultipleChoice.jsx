import React, { useContext } from "react"
// CONTEXT
import { ContextData } from "../context/context"

export const AuditMultipleChoice = () => {
  const { auditElettrico, handleChangeRadio } = useContext(ContextData)

  return (
    <div className="audit-check-wrapper">
      <div className="audit-check-title">
        impianto elettrico e di illuminazione
      </div>
      <table className="audit-check-content">
        <thead>
          <tr>
            <th rowSpan="2">ID</th>
            <th rowSpan="2">intervento</th>
            <th rowSpan="2">periodicità</th>
            <th colSpan="3">eseguito</th>
          </tr>
          <tr>
            <th>SI</th>
            <th>NO</th>
            <th>NA</th>
          </tr>
        </thead>
        <tbody>
          {auditElettrico.map((elem) => {
            return (
              <tr className="audit-check-list" key={elem.id}>
                <td className="audit-check-id">{elem.id}</td>
                <td className="audit-check-intervento">{elem.intervento}</td>
                <td className="audit-check-periodicita">{elem.periodicita}</td>
                <td className="audit-check-eseguito" id={elem.id}>
                  <input
                    type="radio"
                    name={elem.id}
                    value="1"
                    onChange={(e) => handleChangeRadio(elem.id, e.target.value)}
                  />
                </td>
                <td className="audit-check-eseguito" id={elem.id}>
                  <input
                    type="radio"
                    name={elem.id}
                    value="-1"
                    onChange={(e) => handleChangeRadio(elem.id, e.target.value)}
                  />
                </td>
                <td className="audit-check-eseguito" id={elem.id}>
                  <input
                    type="radio"
                    name={elem.id}
                    value="0"
                    onChange={(e) => handleChangeRadio(elem.id, e.target.value)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
