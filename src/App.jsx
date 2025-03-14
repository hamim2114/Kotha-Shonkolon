import React from "react"
import { Container } from "@mui/material"
import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"

function App() {

  return (
    <Container sx={{ p: 0, maxWidth: '500px' }} >
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Container>
  )
}

export default App
