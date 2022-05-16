import React from "react"
import { SignIn } from "./SignIn"
import { SignOut } from "./SignOut"
import { SignUp } from "./SignUp"

export const Auth = () => {
  return (
    <>
      <SignOut />
      <SignIn />
      <SignUp />
    </>
  )
}
