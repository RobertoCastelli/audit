import React, { useState, useEffect, createContext } from "react"
//FIREBASE
import { ditte } from "../database/ditte"
/* import { db } from "../firebase/firebase"
import { collection, getDocs } from "firebase/firestore" */
// CONTEXT
export const ContextData = createContext()

/********************/
/**    FUNCTION    **/
/********************/
const ContextProvider = (props) => {
  // DATE
  const today = new Date().toLocaleDateString()
  const dataPicker = new Date().toISOString().substring(0, 10)
  const time = new Date().toLocaleTimeString().substring(0, 5)
  // FIREBASE VARS
  /*  const collRefSuppliers = collection(db, "suppliers") */
  // USE STATES
  const [supplier, setSupplier] = useState([])
  const [suppliers, setSuppliers] = useState([])
  const [orario, setOrario] = useState(time)
  const [giorno, setGiorno] = useState(dataPicker)

  // GET SUPPLIERS FROM FIREBASE
  /*   useEffect(() => {
    const getSuppliers = async () => {
      const snapshotSuppliers = await getDocs(collRefSuppliers)
      const suppliersList = snapshotSuppliers.docs.map((doc) => doc.data())
      return setSuppliers(suppliersList)
    }
    return () => getSuppliers()
  }, []) */

  //! TEMPORARY GET SUPPLIERS
  useEffect(() => setSuppliers(ditte.map((ditta) => ditta)), [])

  // GET SUPPLIER
  const getSupplier = (ditta) =>
    setSupplier(suppliers.filter((item) => item.ditta === ditta))

  /******************/
  /**    RENDER    **/
  /******************/
  return (
    <ContextData.Provider
      value={{
        today,
        orario,
        setOrario,
        giorno,
        setGiorno,
        supplier,
        getSupplier,
        suppliers,
      }}
    >
      {props.children}
    </ContextData.Provider>
  )
}

export default ContextProvider
