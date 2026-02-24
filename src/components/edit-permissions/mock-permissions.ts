import type { PermissionSection } from "./permissions-types";

export const permissionSections: PermissionSection[] = [
  {
    title: "General Permissions",
    permissions: [
      {
        id: 'chatbot-access',
        name: 'Chatbot Access',
        description: 'View and interact with all deployed chatbots in the workspace.',
        icon: ['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'],
        defaultStatus: 'on'
      },
      {
        id: 'knowledge-base-edit',
        name: 'Knowledge Base Edit',
        description: 'Upload, delete, and modify documents in the RAG pipeline.',
        icon: ['M4 19.5A2.5 2.5 0 0 1 6.5 17H20', 'M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z'],
        defaultStatus: 'on'
      },
      {
        id: 'analytics-dashboard',
        name: 'Analytics Dashboard',
        description: 'Access usage metrics and user interaction reports.',
        icon: ['M3 3h7v7H3z', 'M14 3h7v7h-7z', 'M14 14h7v7h-7z', 'M3 14h7v7H3z'],
        defaultStatus: 'off'
      }
    ]
  },
  {
    title: "Chatbot Management",
    permissions: [
      {
        id: 'user-management',
        name: 'User Management',
        description: 'Invite new users and manage existing account states.',
        icon: ['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
        defaultStatus: 'off'
      },
      {
        id: 'chatbot-configuration',
        name: 'Chatbot Configuration',
        description: 'Modify chatbot prompts, tone, and response behavior settings.',
        icon: ['M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'],
        defaultStatus: 'off'
      },
      {
        id: 'conversation-history',
        name: 'Conversation History',
        description: 'Read and export past conversation logs and session transcripts.',
        icon: ['M1 4 1 10 7 10', 'M3.51 15a9 9 0 1 0 .49-3.45'],
        defaultStatus: 'on'
      }
    ]
  },
  {
    title: "API & Webhooks",
    permissions: [
      {
        id: 'api-key-generation',
        name: 'API Key Generation',
        description: 'Create and rotate secret keys for external automation.',
        icon: ['M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4'],
        defaultStatus: 'on'
      },
      {
        id: 'webhook-configuration',
        name: 'Webhook Configuration',
        description: 'Manage outgoing webhook events and destination URLs.',
        icon: ['M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71', 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'],
        defaultStatus: 'on'
      },
      {
        id: 'rate-limit-override',
        name: 'Rate Limit Override',
        description: 'Bypass standard request throttling for batch operations.',
        icon: ['M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z', 'M12 8v4l3 3'],
        defaultStatus: 'off'
      }
    ]
  }
];