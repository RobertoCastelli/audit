import React from "react"
// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// CONTENXT
import ContextProvider from "./context/context"
// COMPONENTS
import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Auth } from "./auth/Auth"
import { AuditGenerator } from "./audit/AuditGenerator"
import { AuditMainPage } from "./audit/AuditMainPage"
import { Footer } from "./components/Footer"
import { ErrorPage } from "./components/ErrorPage"

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
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/audit" element={<AuditGenerator />} />
              <Route path="/audit-main-page" element={<AuditMainPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ContextProvider>
    </Router>
  )
}

export default App

/**
 * TODO: PDF break page
 * TODO: Delete uploaded image
 * TODO: send email
 */
