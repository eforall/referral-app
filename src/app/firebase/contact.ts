export interface Contact {
    cid: string,
    name: string,
    business: string,
}

export interface ContactDetail extends Contact {
    email: string,
    phone: string,
    contactMethod: string,
    language: string,
    gender: string,
    race: string,
    website: string,
    businessStatus: string,
    address: string,
    immigrant: boolean,
    nonNativeEnglish: boolean,
    lowIncome: boolean,
    wasUnemployed: boolean,
    veteran: boolean,
}

export interface ContactDetails {
    [cid: string]: ContactDetail
}