import React, { useContext } from "react"
// CONTEXT
import { ContextData } from "../context/context"

export const AuditImages = () => {
  const { uploadImages } = useContext(ContextData)
  return (
    <div className="audit-images-wrapper">
      {uploadImages.map((image, i) => {
        return (
          <label htmlFor="img" className="audit-images-id">
            ID #{i + 1}
            <img
              className="audit-images-image"
              src={image}
              key={i}
              name="img"
              alt="uploaded-file"
            />
          </label>
        )
      })}
    </div>
  )
}
