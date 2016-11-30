export interface Contact {
    cid: string,
    name: string,
    business: string,
}

export interface ContactDetail extends Contact {
    email: string,
    phone: string,
    contact_method: string,
    language: string,
    gender: string,
    race: string,
    website: string,
    business_status: string,
    address: string,
    immigrant: boolean,
    non_native_english: boolean,
    low_income: boolean,
    was_unemployed: boolean,
    veteran: boolean,
}

export interface ContactDetails {
    [cid: string]: ContactDetail
}