import React, { useState } from "react";
import { ChevronLeft, Mail, Lock, Info, ChevronDown, Home, MessageSquare, Users, Settings, HelpCircle, LogOut } from "lucide-react";
import logoImage from "@/assets/logow.webp";
import StarsEffect from "../../utils/starseffect";
import InputLabel from "../form-fields/input-field";
import PasswordLabel from "../form-fields/password-field";
import SubmitButton from "../controls/button";
import { useNavigate } from "react-router-dom";

const AccountSettings: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'email' | 'password'>('email');
  const [currentEmail] = useState("you@nexgenguest.com");
  const [newEmail, setNewEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const navigate = useNavigate();

  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, text: '', color: '' };
    
    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const metRequirements = [hasLength, hasUppercase, hasLowercase, hasNumber, hasSpecial].filter(Boolean).length;
    
    if (metRequirements <= 2) return { strength: 33, text: 'Weak password', color: '#EF4444' };
    if (metRequirements <= 4) return { strength: 66, text: 'Medium strength', color: '#F59E0B' };
    return { strength: 100, text: 'Strong password', color: '#10B981' };
  };

  const passwordStrength = getPasswordStrength(newPassword);
  const passwordsMatch = confirmPassword && newPassword === confirmPassword;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email update submitted:', newEmail);
    alert('Email updated successfully!');
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password update submitted');
    alert('Password updated successfully!');
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden font-['Outfit',-apple-system,BlinkMacSystemFont,sans-serif]">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] 
                    bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.3)_0%,rgba(30,41,59,0.1)_40%,transparent_70%)] 
                    blur-[80px] animate-pulse" />

      <StarsEffect />

      {/* Header */}
      <header className="fixed w-full h-20 flex items-center justify-between px-6 z-30 bg-[#0F172A] border-b border-slate-800/10">
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="NexGen Guest" className="h-10" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <img src="https://i.pravatar.cc/150?img=12" alt="Admin" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <span className="text-slate-100 text-sm font-semibold">Caleb Griffin</span>
            <span className="text-slate-400 text-xs text-left">Admin Access</span>
          </div>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </header>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="w-24 min-h-screen flex flex-col items-center py-6 gap-4 fixed bg-[#0F172A] border-r border-slate-800/10 z-20">
          <nav className="flex flex-col gap-2 flex-1">
            <a href="#" className="flex items-center justify-center p-4 transition-all rounded-lg hover:bg-blue-600/10 group">
              <Home className="w-6 h-6 text-slate-500 group-hover:text-blue-500 transition-colors" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 transition-all rounded-lg hover:bg-blue-600/10 group">
              <MessageSquare className="w-6 h-6 text-slate-500 group-hover:text-blue-500 transition-colors" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 transition-all rounded-lg hover:bg-blue-600/10 group">
              <Users className="w-6 h-6 text-slate-500 group-hover:text-blue-500 transition-colors" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 transition-all rounded-lg bg-blue-600">
              <Settings className="w-6 h-6 text-white" />
            </a>
          </nav>
          <div className="flex flex-col gap-2">
            <a href="#" className="flex items-center justify-center p-4 transition-all rounded-lg hover:bg-blue-600/10 group">
              <HelpCircle className="w-6 h-6 text-slate-500 group-hover:text-blue-500 transition-colors" />
            </a>
            <a href="#" className="flex items-center justify-center p-4 transition-all rounded-lg hover:bg-blue-600/10 group">
              <LogOut className="w-6 h-6 text-slate-500 group-hover:text-blue-500 transition-colors" />
            </a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-24 flex-1 bg-[#0F1922] relative z-10">
          <div className="flex">
            
            {/* Left Nav Panel */}
            <div className="w-80 min-h-screen px-6 py-8 bg-[#0F172A] border-r border-slate-800/10">
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-200 mb-8 transition-colors pl-3">
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Back to Dashboard</span>
              </a>

              <h1 className="text-slate-100 text-base font-bold mb-8 tracking-wide pl-3 text-left">ACCOUNT SETTINGS</h1>

              <div className="space-y-2">
                <div onClick={() => setActiveSection('email')}
                  className={`flex items-center justify-start gap-3.5 w-full text-left px-5 py-4 rounded-xl cursor-pointer transition-all text-[15px] font-medium border relative
                    ${activeSection === 'email' ? 'text-blue-500 bg-blue-600/12 border-blue-600/40 font-semibold shadow-[0_2px_8px_rgba(59,130,246,0.15)]' 
                      : 'text-slate-400 bg-transparent border-transparent hover:text-slate-50 hover:bg-blue-600/8 hover:border-blue-600/20'}`}>
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>Update Email</span>
                  {activeSection === 'email' && <div className="absolute right-3 w-1.5 h-1.5 bg-blue-500 rounded-full" />}
                </div>
                
                <div onClick={() => setActiveSection('password')}
                  className={`flex items-center justify-start gap-3.5 w-full text-left px-5 py-4 rounded-xl cursor-pointer transition-all text-[15px] font-medium border relative
                    ${activeSection === 'password' ? 'text-blue-500 bg-blue-600/12 border-blue-600/40 font-semibold shadow-[0_2px_8px_rgba(59,130,246,0.15)]' 
                      : 'text-slate-400 bg-transparent border-transparent hover:text-slate-50 hover:bg-blue-600/8 hover:border-blue-600/20'}`}>
                  <Lock className="w-5 h-5 flex-shrink-0" />
                  <span>Update Password</span>
                  {activeSection === 'password' && <div className="absolute right-3 w-1.5 h-1.5 bg-blue-500 rounded-full" />}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 p-12">
              <div className="max-w-4xl">
                
                {/* Email Section */}
                {activeSection === 'email' && (
                  <div className="animate-[fadeIn_0.3s_ease-out]">
                    <div className="bg-[#1E293B] border border-[#1E293B] rounded-xl p-10">
                      <div className="flex items-start gap-4 mb-8">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="text-slate-100 text-xl font-bold mb-1 text-left">Update Email Address</h3>
                          <p className="text-slate-400 text-sm text-left">Change the email associated with your NexGen Guest account.</p>
                        </div>
                      </div>

                      <form onSubmit={handleEmailSubmit} className="space-y-6">
                        <InputLabel label="Current Email" type="email" id="current-email" name="current-email" 
                          value={currentEmail} onChange={() => {}} />
                        <InputLabel label="New Email Address" type="email" id="new-email" name="new-email" 
                          placeholder="Enter new email address" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                        <div className="flex justify-end mt-8">
                          <SubmitButton text="Save Email Changes" />
                        </div>
                      </form>
                    </div>
                  </div>
                )}

                {/* Password Section */}
                {activeSection === 'password' && (
                  <div className="animate-[fadeIn_0.3s_ease-out]">
                    <div className="bg-[#1E293B] border border-[#1E293B] rounded-xl p-10">
                      <div className="flex items-start gap-4 mb-8">
                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <Lock className="w-6 h-6 text-blue-500" />
                        </div>
                        <div>
                          <h3 className="text-slate-100 text-xl font-bold mb-1 text-left">Update Password</h3>
                          <p className="text-slate-400 text-sm text-left">Strengthen your account security by updating your password.</p>
                        </div>
                      </div>

                      <form onSubmit={handlePasswordSubmit} className="space-y-6">
                        <PasswordLabel label="Current Password" id="current-password" name="current-password"
                          value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />

                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <PasswordLabel label="New Password" id="new-password" name="new-password"
                              value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            {newPassword && (
                              <>
                                <div className="h-1 bg-[#1E293B] rounded-full overflow-hidden mt-2">
                                  <div className="h-full transition-all duration-300"
                                    style={{ width: `${passwordStrength.strength}%`, backgroundColor: passwordStrength.color }} />
                                </div>
                                <p className="text-xs mt-1 text-left" style={{ color: passwordStrength.color }}>
                                  {passwordStrength.text}
                                </p>
                              </>
                            )}
                          </div>

                          <div>
                            <PasswordLabel label="Confirm Password" id="confirm-password" name="confirm-password"
                              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            {confirmPassword && (
                              <p className="text-xs mt-1 text-left" style={{ color: passwordsMatch ? '#10B981' : '#EF4444' }}>
                                {passwordsMatch ? '✓ Passwords match' : '✗ Passwords do not match'}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="flex items-start gap-2 text-slate-400 text-sm text-left">
                          <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <p className="text-left">Password must be at least 8 characters and include uppercase, lowercase, number, and special character.</p>
                        </div>

                        <div className="flex justify-end gap-3 mt-8">
                          <button type="button" onClick={() => { setCurrentPassword(''); setNewPassword(''); setConfirmPassword(''); }}
                            className="bg-[#1E293B] text-slate-400 px-6 py-3 rounded-lg font-semibold text-sm border border-slate-700 
                              hover:text-slate-50 hover:border-slate-600 hover:bg-slate-800 transition-all">
                            Cancel
                          </button>
                          <SubmitButton text="Update Password" />
                        </div>
                      </form>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </main>
      </div>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default AccountSettings;