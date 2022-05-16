import React from "react"
// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// CONTENXT
import ContextProvider from "./context/context"
// COMPONENTS
import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Footer } from "./components/Footer"
import { ErrorPage } from "./components/ErrorPage"
import { Audit } from "./audit/Audit"
import { Auth } from "./auth/Auth"

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
            <Routes>
              <Route path="*" element={<ErrorPage />} />
              <Route path="/" element={<Home />} />
              <Route path="/audit" element={<Audit />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  )
}

export default App
