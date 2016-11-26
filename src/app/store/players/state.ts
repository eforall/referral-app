/**
 * NOTE: This app currently loads ALL of the partners, members and contacts.  This was a design
 * choice to help keep the project within budget.  This is OK because the use is expected to
 * be fairly low.  If the application use grows then it is recommended to adjust this to load
 * what is needed on demand.
 */

export interface Partner {
    pid: string,
    name: string,
}

export interface Member {
    uid: string,
    name: string,
    email: string,
    pid?: string,
}

export interface Contact {
    cid: string,
    name: string,
    email: string,
    phone: string,
    contactMethod: string,
    language: string,
    gender: string,
    race: string,
    business: string,
    website: string,
    businessStatus: string,
    address: string,
    immigrant: boolean,
    nonNativeEnglish: boolean,
    lowIncome: boolean,
    wasUnemployed: boolean,
    veteran: boolean,
}

export interface PlayersState {
    partners: Partner[],
    members: Member[],
    contacts: Contact[],
}

export const initialState: PlayersState = {
    partners: [],
    members: [],
    contacts: [],
}