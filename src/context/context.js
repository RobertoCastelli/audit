import React, { useState, useEffect, useRef, createContext } from "react"
// FIREBASE DATABASE
import { ditte } from "../database/ditte"
import { mesi } from "../database/mesi"
import { auditElettrico } from "../database/auditElettrico"
// PDF
import { useReactToPrint } from "react-to-print"
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
  // USE STATES
  const [supplier, setSupplier] = useState([])
  const [suppliers, setSuppliers] = useState([])
  const [orario, setOrario] = useState(time)
  const [giorno, setGiorno] = useState(dataPicker)
  const [selectedEdificio, setSelectedEdificio] = useState("B1")
  const [meseTestuale, setMeseTestuale] = useState("")
  const [uploadImages, setUploadImages] = useState([])

  // GET SUPPLIERS
  useEffect(() => setSuppliers(ditte.map((ditta) => ditta)), [])

  // GET SUPPLIER
  const getSupplier = (ditta) => {
    setSupplier(suppliers.filter((item) => item.ditta === ditta))
    // clear images array
    setUploadImages([])
  }

  // GET AUDIT DATA
  // --> Supplier
  // --> Edificio
  // --> Giorno
  // --> Orario
  // --> Mese testuale
  const getAuditData = (numeroMese) => {
    const mese = mesi.filter((mese) => mese.numero === numeroMese)
    setMeseTestuale(mese[0].mese)
  }

  // UPLOAD FILE HANDLER
  const handleUploadImages = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      )
      setUploadImages((prevImages) => prevImages.concat(fileArray))
    }
  }

  // PDF
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  /******************/
  /**    RENDER    **/
  /******************/
  return (
    <ContextData.Provider
      value={{
        today,
        orario,
        suppliers,
        meseTestuale,
        setOrario,
        giorno,
        setGiorno,
        supplier,
        getSupplier,
        selectedEdificio,
        setSelectedEdificio,
        getAuditData,
        uploadImages,
        handleUploadImages,
        componentRef,
        handlePrint,
        auditElettrico,
      }}
    >
      {props.children}
    </ContextData.Provider>
  )
}

export default ContextProvider
