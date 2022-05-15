import React, { useContext } from "react"
import { ContextData } from "../context/context"

export const Header = () => {
  const { today } = useContext(ContextData)
return <div>{today}</div>
}
