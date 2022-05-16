import React from "react"
// REACT ICONS
import { BsPersonCheck } from "react-icons/bs"

/******************/
/**   FUNCTION   **/
/******************/
export const SignIn = () => {
  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-title">sign in</div>
      <form className="sign-in-input">
        <input
          type="email"
          name="email"
          className="sign-in-email"
          placeholder="email"
          required
        />
        <input
          type="password"
          name="password"
          className="sign-in-password"
          placeholder="password"
          required
        />
        <button
          className="btn-sign-in"
          type="submit"
          style={{ color: "green" }}
        >
          <BsPersonCheck size={20} />
        </button>
      </form>
    </div>
  )
}
