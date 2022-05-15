import React from "react"

/******************/
/**   FUNCTION   **/
/******************/
export const ErrorPage = () => {
  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <div className="error-wrapper">
      <div className="error-404">error 404</div>
      <div>
        page not found at:
        <span className="error-url"> {window.location.href}</span>
      </div>
    </div>
  )
}
