import React, { useContext } from "react"
// CONTEXT
import { ContextData } from "../context/context"

export const AuditImages = () => {
  const { uploadImages } = useContext(ContextData)
  return (
    <div className="audit-images-wrapper">
      <div className="audit-bold-italic">allegati</div>
      {uploadImages.map((image, i) => {
        return (
          <fieldset key={i} className="audit-images-fieldset">
            <legend htmlFor="img" className="audit-images-id">
              ID #{i + 1}
            </legend>
            <img
              className="audit-images-image"
              src={image}
              name="img"
              alt="uploaded-file"
            />
          </fieldset>
        )
      })}
    </div>
  )
}
