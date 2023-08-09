import React from 'react'
import Nav from './component/Nav'
import Footer from './component/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NoPage from './component/NoPage'
import Contact from './component/Contact'
const App = () => {
  return (
    <>
    <Nav />
    <BrowserRouter >
        <Routes>
        <Route index element={<NoPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> 
        </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App