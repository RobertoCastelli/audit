import React from "react"
// REACT ICONS
import { BsPersonDash } from "react-icons/bs"

/******************/
/**   FUNCTION   **/
/******************/
export const SignOut = () => {
  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <>
      <div className="sign-out-wrapper">
        <div className="sign-out-title">sign out</div>
        <button
          className="btn-sign-out"
          type="button"
          style={{ color: "brown" }}
        >
          <BsPersonDash size={20} />
        </button>
      </div>
    </>
  )
}
