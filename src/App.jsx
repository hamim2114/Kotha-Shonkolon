import React from "react"
import { Container } from "@mui/material"
import { Navigate, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import Profile from "./pages/profile/Profile"

function App() {

  return (
    <Container maxWidth='sm' sx={{ p: 0, maxWidth: '500px' }} >
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Container>
  )
}

export default App
