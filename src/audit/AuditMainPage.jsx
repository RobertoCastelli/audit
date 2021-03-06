import React, { useContext } from "react"
// COMPONENTS
import { AuditIntestazione } from "./AuditIntestazione"
import { AuditReferenti } from "./AuditReferenti"
import { AuditPremesso } from "./AuditPremesso"
import { AuditVerbalizza } from "./AuditVerbalizza"
import { AuditMultipleChoice } from "./AuditMultipleChoice"
import { AuditResult } from "./AuditResult"
import { AuditNote } from "./AuditNote"
import { AuditFirme } from "./AuditFirme"
import { AuditPiePagina } from "./AuditPiePagina"
import { AuditButtons } from "./AuditButtons"
import { AuditImages } from "./AuditImages"
// CONTEXT
import { ContextData } from "../context/context"

/******************/
/**   FUNCITON   **/
/******************/
export const AuditMainPage = () => {
  // CONTEXT
  const { supplier, componentRef } = useContext(ContextData)

  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <>
      {supplier.length !== 0 ? (
        <div className="audit-main-page-wrapper" ref={componentRef}>
          <AuditIntestazione />
          <AuditReferenti />
          <AuditPremesso />
          <AuditVerbalizza />
          <AuditMultipleChoice />
          <AuditResult />
          <AuditNote />
          <AuditImages />
          <AuditFirme />
          <AuditPiePagina />
        </div>
      ) : (
        <div className="audit-main-page-no-supplier-loaded">
          No supplier loaded
        </div>
      )}
      <AuditButtons />
    </>
  )
}
