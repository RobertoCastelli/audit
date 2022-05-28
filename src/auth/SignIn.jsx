import React, { useContext } from "react"
// REACT ICONS
import { BsPersonCheck } from "react-icons/bs"
// CONTEXT
import { ContextData } from "../context/context"

/******************/
/**   FUNCTION   **/
/******************/
export const SignIn = () => {
  const { handleSignIn, handleNicknameEmailPassword } = useContext(ContextData)
  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-title">sign in</div>
      <form className="sign-in-input">
        <input
          required
          type="email"
          name="email"
          className="sign-in-email"
          placeholder="email"
          onChange={handleNicknameEmailPassword}
        />
        <input
          required
          type="password"
          name="password"
          className="sign-in-password"
          placeholder="password"
          onChange={handleNicknameEmailPassword}
        />
        <button
          className="btn-sign-in"
          type="submit"
          style={{ color: "green" }}
          onClick={(e) => handleSignIn(e)}
        >
          <BsPersonCheck size={20} />
        </button>
      </form>
    </div>
  )
}
