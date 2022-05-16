import React from "react"
// REACT ICONS
import { BsPersonPlus } from "react-icons/bs"

/******************/
/**   FUNCTION   **/
/******************/
export const SignUp = () => {
  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <>
      <div className="sign-up-wrapper">
        <div className="sign-up-title">sign up</div>
        <form className="sign-up-input">
          <input
            type="text"
            name="nickname"
            className="sign-up-nickname"
            placeholder="nickname"
          />
          <input
            type="email"
            name="email"
            className="sign-up-email"
            placeholder="email"
            required
          />
          <input
            type="password"
            name="password"
            className="sign-up-password"
            placeholder="password"
            required
          />
          <button
            type="submit"
            className="btn-sign-up"
            style={{ color: "#716040" }}
          >
            <BsPersonPlus size={20} />
          </button>
        </form>
      </div>
    </>
  )
}
