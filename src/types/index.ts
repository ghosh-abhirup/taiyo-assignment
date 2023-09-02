export interface SideBarProps {
  open: boolean;
  close: () => void;
}

export interface ContactFormProps {
  open: boolean;
  closeFn: () => void;
}

export interface Contact {
  id: string;
  data: ContactPayload;
}

export interface ContactPayload {
  firstName: string;
  lastName: string;
  status: string;
}

export interface ContactEditPayload {
  id: string;
  firstName: string;
  lastName: string;
  status: string;
}

export interface AppState {
  contacts: Contact[];
}

export interface ContactDetailsProps {
  open: boolean;
  closeFn: () => void;
  contact: Contact;
  contactDelete: () => void;
  openEdit: () => void;
}

export interface EditContactProps {
  open: boolean;
  closeFn: () => void;
  contact: Contact;
}
