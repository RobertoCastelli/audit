import React, { useState, useEffect, useRef, createContext } from "react"
// DATABASE
import { ditte } from "../database/ditte"
import { mesi } from "../database/mesi"
import { auditElettrico } from "../database/auditElettrico"
// PDF
import { useReactToPrint } from "react-to-print"
// FIREBASE
import { auth } from "../firebase/firebase"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth"
// NAVIGATE
import { useNavigate } from "react-router-dom"
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
  // NAVIGATE
  const navigate = useNavigate()
  // GENERAL DATA
  const [orario, setOrario] = useState(time)
  const [giorno, setGiorno] = useState(dataPicker)
  const [meseTestuale, setMeseTestuale] = useState("")
  // SUPPLIERS DATA
  const [supplier, setSupplier] = useState([])
  const [suppliers, setSuppliers] = useState([])
  const [selectedEdificio, setSelectedEdificio] = useState("B1")
  // UPLOAD IMAGES
  const [uploadImages, setUploadImages] = useState([])
  // MULTIPLE CHOICE
  const [result, setResult] = useState(0)
  const [radioState, setRadioState] = useState([])
  // AUTH
  const [user, setUser] = useState({ nickname: "", email: "", password: "" })
  const [displayName, setDisplayName] = useState("")
  const [userState, setUserState] = useState(false)

  // GET SUPPLIERS
  useEffect(() => setSuppliers(ditte.map((ditta) => ditta)), [])

  // GET SUPPLIER (Home.jsx)
  const getSupplier = (ditta) => {
    setSupplier(suppliers.filter((item) => item.ditta === ditta))
    // clear images array
    setUploadImages([])
  }

  // GET AUDIT DATA (AuditGenerator.jsx)
  // --> Supplier
  // --> Edificio
  // --> Giorno
  // --> Orario
  // --> Mese testuale
  const getAuditData = (numeroMese) => {
    const mese = mesi.filter((mese) => mese.numero === numeroMese)
    setMeseTestuale(mese[0].mese)
  }

  // UPLOAD IMAGES (AuditButtons.jsx)
  const handleUploadImages = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      )
      setUploadImages((prevImages) => prevImages.concat(fileArray))
    }
  }

  // CREATE PDF (AuditButtons.jsx)
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  // CALCULATE RESULT (AuditMultipleChoice.jsx)
  // 1. --> crea un array copia di 0
  useEffect(() => {
    Array.isArray(auditElettrico) &&
      setRadioState(new Array(auditElettrico.length).fill(0))
  }, [])
  // 2. --> sostituisci i valori radio nell'array copia di 0
  const handleChangeRadio = (position, valore) => {
    setRadioState(
      radioState.map((radio, i) =>
        position === i + 1 ? (radio = parseInt(valore)) : radio
      )
    )
  }
  // 3. --> calcola risultato
  useEffect(() => {
    const numeratore = radioState.reduce((a, b) => a + b, 0)
    const denominatore = radioState.length
    setResult(Math.floor((numeratore / denominatore) * 100))
  }, [radioState])

  // GET USER NICKNAME, EMAIL & PASSWORD
  const handleNicknameEmailPassword = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  // GET USER NAME WHEN LOGGED IN
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setDisplayName(auth.currentUser.displayName)
        setUserState(true)
      } else {
        setDisplayName("no user logged")
        setUserState(false)
      }
    })
  }, [user])

  // SIGNIN
  const handleSignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then(() => console.log(`${auth.currentUser.displayName} logged in!`))
      .then(() => navigate("/"))
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(`error code: ${errorCode}, error message: ${errorMessage}`)
      })
  }

  // SIGNUP
  const handleSignUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: user.nickname,
        })
      )
      .then(() => console.log(`${auth.currentUser.displayName} has signed up!`))
      .then(() => setDisplayName(auth.currentUser.displayName))
      .then(() => navigate("/"))
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(`error code: ${errorCode}, error message: ${errorMessage}`)
      })
  }

  // SIGNOUT
  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error) =>
        console.log(`hoops! there is an error: ${error.message}`)
      )
  }

  /******************/
  /**    RENDER    **/
  /******************/
  return (
    <ContextData.Provider
      value={{
        // GENERAL DATA
        today,
        orario,
        suppliers,
        meseTestuale,
        setOrario,
        giorno,
        setGiorno,
        // SUPPLIERS DATA
        supplier,
        getSupplier,
        selectedEdificio,
        setSelectedEdificio,
        getAuditData,
        // UPLOAD IMAGES
        uploadImages,
        handleUploadImages,
        // PDF
        componentRef,
        handlePrint,
        // MULTIPLE CHOICE
        auditElettrico,
        handleChangeRadio,
        result,
        // AUTH
        user,
        userState,
        displayName,
        handleSignOut,
        handleSignIn,
        handleSignUp,
        handleNicknameEmailPassword,
      }}
    >
      {props.children}
    </ContextData.Provider>
  )
}

export default ContextProvider
