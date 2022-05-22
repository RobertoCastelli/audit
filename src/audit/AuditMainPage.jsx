import React from "react"
// COMPONENTS
import { AuditIntestazione } from "./AuditIntestazione"
import { AuditReferenti } from "./AuditReferenti"
import { AuditPremesso } from "./AuditPremesso"
import { AuditVerbalizza } from "./AuditVerbalizza"
import { AuditNote } from "./AuditNote"
import { AuditFirme } from "./AuditFirme"
import { AuditPiePagina } from "./AuditPiePagina"
import { AuditButtons } from "./AuditButtons"
import { AuditImages } from "./AuditImages"

/******************/
/**   FUNCITON   **/
/******************/
export const AuditMainPage = () => {
  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <>
      <div className="audit-main-page-wrapper">
        <AuditIntestazione />
        <AuditReferenti />
        <AuditPremesso />
        <AuditVerbalizza />
        <AuditNote />
        <AuditImages />
        <AuditFirme />
        <AuditPiePagina />
      </div>
      <AuditButtons />
    </>
  )
}
