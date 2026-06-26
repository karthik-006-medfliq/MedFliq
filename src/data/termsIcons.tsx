import {
  Building2, Layers, Eye, UserCheck, Globe, HelpCircle,
  Lock, Shield, Clock, User, Server, FileText,
  AlertCircle, Mail
} from './privacyIcons'

// eslint-disable-next-line react-refresh/only-export-components
export const termsIcons = [
  Building2, Layers, UserCheck, Shield, AlertCircle, FileText,
  Lock, Eye, Globe, Clock, User, Server, HelpCircle,
  Building2, Globe, Layers, Mail
]

// eslint-disable-next-line react-refresh/only-export-components
export function getIconForSection(idx: number) {
  return termsIcons[idx] || FileText
}

// Export ChevronRight so components can use it
export { ChevronRight } from './privacyIcons'
