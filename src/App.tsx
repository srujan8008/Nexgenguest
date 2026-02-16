import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/login-page'
import ResetPasswordPage from './pages/reset-password-page'
import AccountSettingsPage from './pages/account-settings-page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage/>} />
        <Route path="/account-settings" element={<AccountSettingsPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App