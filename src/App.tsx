import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PendingInvitations from "./components/pending-invitations/pending-invitations";
import InviteUser from "./components/invite-user/invite-user";
// import UserManagement from "./components/user-management-rolemodal/user-management";
// import Properties from "./components/properties/properties";
// import EditPermissions from "./components/edit-permissions/edit-permissions";
// import RoleManagement from "./components/role-management/role-management";
import InvitationSent from "./components/invitation-sent/invitation-sent";
// import InviteUser from "./components/invite-user/invite-user";
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
        <Route path="/login" element={<InviteUser />} />
        {/* <Route path="/login" element={<UserManagement />} /> */}
        {/* <Route path="/login" element={<Properties />} /> */}
        {/* <Route path="/edit-permissions/:roleName" element={<EditPermissions />} /> */}
        <Route path="/invitation-sent" element={<InvitationSent />} />
         <Route path="/pending-invitations" element={<PendingInvitations />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
