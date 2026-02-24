import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import UserManagement from "./components/user-management-rolemodal/user-management";
import Properties from "./components/properties/properties";
// import LoginPage from "./pages/login-page";
// import LogoutPage from "./components/logout/logout";
// import RoleManagement from "./components/role-management/role-management";
// import ResetPasswordPage from './pages/reset-password-page'
// import AccountSettingsPage from './pages/account-settings-page'
// import UserManagement from './components/user-management/user-management'
// import InviteUser from './components/invite-user/invite-user'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="login" replace />} />
        {/* <Route path="/login" element={<LogoutPage />} /> */}
          {/* <Route path="/login" element={<RoleManagement />} /> */}
        {/* <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/account-settings" element={<AccountSettingsPage />} />
        <Route path="/user-management" element={<UserManagement />} /> */}
        {/* <Route path="/invite-user" element={<InviteUser />} /> */}
        {/* <Route path="/login" element={<UserManagement />} /> */}
        <Route path="/login" element={<Properties />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
