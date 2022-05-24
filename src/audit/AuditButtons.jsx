import React, { useContext } from "react"
// CONTEXT
import { ContextData } from "../context/context"
// ICONS
import { ImImages } from "react-icons/im"
export const AuditButtons = () => {
  // CONTEXT
  const { handleUploadImages } = useContext(ContextData)
  return (
    <div className="audit-upload-wrapper">
      <input
        multiple
        className="btn-audit-upload"
        type="file"
        id="upload"
        accept="image/*"
        onChange={handleUploadImages}
      />
      <div className="audit-upload-icon">
        <ImImages size={30} />
      </div>
      <button className="btn-pdf">PDF</button>
    </div>
  )
}
