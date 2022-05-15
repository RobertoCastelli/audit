import React, { useState, useEffect, createContext } from "react"
//FIREBASE
import { db } from "../firebase/firebase"
import { collection, getDocs } from "firebase/firestore"
// CONTEXT
export const ContextData = createContext()

/********************/
/**    FUNCTION    **/
/********************/
const ContextProvider = (props) => {
  // DATE
  const today = new Date().toLocaleDateString()
  // FIREBASE VARS
  const collRefSuppliers = collection(db, "suppliers")
  // USE STATES
  const [suppliers, setSuppliers] = useState([])

  // GET SUPPLIERS FROM FIREBASE
  useEffect(() => {
    const getSuppliers = async () => {
      const snapshotSuppliers = await getDocs(collRefSuppliers)
      const suppliersList = snapshotSuppliers.docs.map((doc) => doc.data())
      return setSuppliers(suppliersList)
    }
    return () => getSuppliers()
  }, [])

  /******************/
  /**    RENDER    **/
  /******************/
  return (
    <ContextData.Provider value={{ today, suppliers }}>
      {props.children}
    </ContextData.Provider>
  )
}

export default ContextProvider
