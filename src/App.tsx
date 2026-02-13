import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login-page'
import ResetPasswordPage from './pages/reset-password-page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App