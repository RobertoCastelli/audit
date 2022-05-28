import React from "react"
import { SignIn } from "./SignIn"
import { SignOut } from "./SignOut"
import { SignUp } from "./SignUp"

/******************/
/**   FUNCTION   **/
/******************/
export const Auth = () => {
  /****************/
  /**   RENDER   **/
  /****************/
  return (
    <>
      <SignOut />
      <SignIn />
      <SignUp />
    </>
  )
}
