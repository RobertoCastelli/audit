import React, { useContext } from "react"
// REACT ICONS
import { BsPersonDash } from "react-icons/bs"
// CONTEXT
import { ContextData } from "../context/context"

/******************/
/**   FUNCTION   **/
/******************/
export const SignOut = () => {
  const { handleSignOut } = useContext(ContextData)
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
          onClick={handleSignOut}
        >
          <BsPersonDash size={20} />
        </button>
      </div>
    </>
  )
}
