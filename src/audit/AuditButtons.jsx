import React, { useContext } from "react"
import { ContextData } from "../context/context"

export const AuditButtons = () => {
  const { handleUploadImages } = useContext(ContextData)
  return (
    <div>
      <input
        type="file"
        id="upload"
        accept="image/*"
        multiple
        onChange={handleUploadImages}
      />
    </div>
  )
}
