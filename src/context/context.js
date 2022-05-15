import React, { createContext } from "react"

// CONTEXT
export const ContextData = createContext()

/********************/
/**    FUNCTION    **/
/********************/
const ContextProvider = (props) => {
  // DATE
  const today = new Date().toLocaleDateString()

  /******************/
  /**    RENDER    **/
  /******************/
  return (
    <ContextData.Provider value={{ today }}>
      {props.children}
    </ContextData.Provider>
  )
}

export default ContextProvider
