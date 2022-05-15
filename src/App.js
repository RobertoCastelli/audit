import React from "react"
// ROUTER
import { BrowserRouter as Router } from "react-router-dom"
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
    <Router>
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
    </Router>
  )
}

export default App
