import React from 'react'
import Home from "./components/Home"
import { Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Login from './components/Login'

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Login />} path="/login" />
      <Route element={<NotFound />} path='*' />
    </Routes>

  )
}

export default App