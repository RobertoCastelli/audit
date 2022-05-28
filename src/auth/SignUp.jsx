import React, { useContext } from "react"
// REACT ICONS
import { BsPersonPlus } from "react-icons/bs"
// CONTEXT
import { ContextData } from "../context/context"

/******************/
/**   FUNCTION   **/
/******************/
export const SignUp = () => {
  // CONTEXT
  const { handleSignUp, handleNicknameEmailPassword } = useContext(ContextData)
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
            onChange={handleNicknameEmailPassword}
          />
          <input
            required
            type="email"
            name="email"
            className="sign-up-email"
            placeholder="email"
            onChange={handleNicknameEmailPassword}
          />
          <input
            required
            type="password"
            name="password"
            className="sign-up-password"
            placeholder="password"
            onChange={handleNicknameEmailPassword}
          />
          <button
            type="submit"
            className="btn-sign-up"
            style={{ color: "#716040" }}
            onClick={(e) => handleSignUp(e)}
          >
            <BsPersonPlus size={20} />
          </button>
        </form>
      </div>
    </>
  )
}
