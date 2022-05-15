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
import { Audit } from "./components/Audit"

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
              <Route path="/audit" element={<Audit />} />
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
