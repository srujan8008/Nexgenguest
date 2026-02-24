import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ADD THIS IMPORT
import UserDetailsSection from "./section/user-details-section";
import AccessControlSection from "./section/access-control-section";
import ScopeDefinitionSection from "./section/scope-definition-section";
import FormFooter from "./form-footer";
import TitleDescriptionCard from "../common/cards/title-description-card";

const Content = () => {
  const navigate = useNavigate(); // ADD THIS HOOK
  
  const [role, setRole] = useState<"staff" | "admin" | "superadmin">("staff");
  const [scope, setScope] = useState("all");
  const [properties, setProperties] = useState([
    "Grand Nexus Plaza",
    "Azure Resort & Spa",
  ]);
  const [inputValue, setInputValue] = useState("");

  const roleDescriptions = {
    staff:
      "<strong>Staff:</strong> Can view data across assigned properties but cannot modify settings or guest information.",
    admin:
      "<strong>Hotel Admin:</strong> Full property management with billing, reporting, and guest configuration access.",
    superadmin:
      "<strong>Super Admin:</strong> Unrestricted system access including global roles, secrets, and all hotel properties.",
  };

  const handleAddProperty = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && inputValue.trim()) {
      e.preventDefault();
      const newProperty = inputValue.replace(",", "").trim();
      setProperties([...properties, newProperty]);
      setInputValue("");
    }
  };

  const removeProperty = (indexToRemove: number) => {
    setProperties(properties.filter((_, index) => index !== indexToRemove));
  };

  // ADD THIS FUNCTION - handles navigation when Send Invitation is clicked
  const handleSendInvitation = () => {
    // Get email from UserDetailsSection - you'll need to lift state up or use context
    // For now, using placeholder
    const email = "teammate@company.com"; // Replace with actual email from form
    
    navigate('/invitation-sent', {
      state: {
        email: email,
        role: role,
        scope: scope === 'all' ? 'All Hotels' : 'Specific Hotels'
      }
    });
  };

  return (
    <main className="fixed top-[72px] bottom-0 overflow-y-auto left-0 md:left-[360px] right-0 p-4 md:p-10 bg-[#0F1922]">
      {/* Page Header */}
      <h1 className="text-4xl font-extrabold text-[#F1F5F9] mb-1.5 text-left">
        Invite User
      </h1>
      <p className="text-[0.9375rem] text-[#64748B] mb-8 text-left">
        Add a new team member and define their access level and property scope.
      </p>

      {/* Form Card */}
      <div className="max-w-[720px] bg-[#162032] border border-[#1E2D42] rounded-2xl overflow-hidden mb-5">
        <UserDetailsSection />
        <AccessControlSection
          role={role}
          setRole={setRole}
          roleDescriptions={roleDescriptions}
        />
        <ScopeDefinitionSection
          scope={scope}
          setScope={setScope}
          properties={properties}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleAddProperty={handleAddProperty}
          removeProperty={removeProperty}
        />
        {/* PASS THE HANDLER TO FORM FOOTER */}
        <FormFooter onSendInvitation={handleSendInvitation} />
      </div>

      <div className="max-w-[720px]">
        <TitleDescriptionCard
          icon={
            <svg
              className="w-4 h-4 text-[#60A5FA]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          }
          title="Invite Tip"
          description="Organisational Admins have full control over property setups and global guest policies. Only grant this role to trusted executive members."
        />
      </div>
    </main>
  );
};

export default Content;