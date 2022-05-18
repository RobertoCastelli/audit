import React from "react"
// COMPONENTS
import { AuditIntestazione } from "./AuditIntestazione"
import { AuditReferenti } from "./AuditReferenti"
import { AuditPremesso } from "./AuditPremesso"
import { AuditVerbalizza } from "./AuditVerbalizza"
import { AuditNote } from "./AuditNote"
import { AuditFirme } from "./AuditFirme"
import { AuditPiePagina } from "./AuditPiePagina"

/******************/
/**   FUNCITON   **/
/******************/
export const AuditMainPage = () => {
  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <div className="audit-main-page-wrapper">
      <AuditIntestazione />
      <AuditReferenti />
      <AuditPremesso />
      <AuditVerbalizza />
      <AuditNote />
      <AuditFirme />
      <AuditPiePagina />
    </div>
  )
}
