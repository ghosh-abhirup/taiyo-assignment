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

export interface CountryInfoProps {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}

export interface CountryDataProps {
  updated: number;
  country: string;
  countryInfo: CountryInfoProps;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}
