import React from "react"
// CONTENXT
import ContextProvider from "./context/context"
// COMPONENTS
import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Footer } from "./components/Footer"

/******************/
/**   FUNCTION   **/
/******************/
function App() {
  return (
    <ContextProvider>
      <div className="container">
        <div className="content">
          <Navbar />
          <Header />
          <Home />
        </div>
        <Footer />
      </div>
    </ContextProvider>
  )
}

export default App
