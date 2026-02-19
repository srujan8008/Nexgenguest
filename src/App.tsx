import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/login-page";
// import ResetPasswordPage from './pages/reset-password-page'
// import AccountSettingsPage from './pages/account-settings-page'
// import UserManagement from './components/user-management/user-management'
// import InviteUser from './components/invite-user/invite-user'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/account-settings" element={<AccountSettingsPage />} />
        <Route path="/user-management" element={<UserManagement />} /> */}
        {/* <Route path="/invite-user" element={<InviteUser />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
